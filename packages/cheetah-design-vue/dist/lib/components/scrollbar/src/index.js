"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const useExpose = require("../../../composables/useExpose.js");
const scrollbarProps = {
  height: Number,
  minThumbSize: {
    type: Number,
    default: 20
  },
  behavior: {
    type: String,
    default: "auto"
  }
};
const Scrollbar = /* @__PURE__ */ Vue.defineComponent({
  name: "Scrollbar",
  props: scrollbarProps,
  emits: ["scroll"],
  setup(props, {
    slots,
    emit
  }) {
    let beforeScrollTop = 0;
    let beforeScrollLeft = 0;
    const translateX = Vue.ref(0);
    const translateY = Vue.ref(0);
    const thumbWidth = Vue.ref(0);
    const thumbHeight = Vue.ref(0);
    const isShowBar = Vue.ref(false);
    const isShowBarX = Vue.ref(false);
    const isShowBarY = Vue.ref(false);
    const wrpperEl = Vue.ref();
    const thumbXEl = Vue.ref();
    const thumbYEl = Vue.ref();
    useExpose.useExpose({
      scrollto(options) {
        var _a;
        (_a = wrpperEl.value) == null ? void 0 : _a.scrollTo(options);
      }
    });
    const scrollbarHeight = Vue.computed(() => {
      if (props.height) {
        return {
          height: `${props.height}px`
        };
      }
      return {
        height: "100%"
      };
    });
    const updateThumb = () => {
      if (!(wrpperEl == null ? void 0 : wrpperEl.value))
        return;
      thumbHeight.value = Math.max(wrpperEl.value.offsetHeight ** 2 / wrpperEl.value.scrollHeight, props.minThumbSize);
      thumbWidth.value = Math.max(wrpperEl.value.offsetWidth ** 2 / wrpperEl.value.scrollWidth, props.minThumbSize);
    };
    const scrollX = () => {
      var _a;
      (_a = wrpperEl.value) == null ? void 0 : _a.scrollTo({
        left: wrpperEl.value.scrollWidth * (translateX.value / wrpperEl.value.offsetWidth),
        behavior: props.behavior
      });
    };
    const scrollY = () => {
      var _a;
      (_a = wrpperEl.value) == null ? void 0 : _a.scrollTo({
        top: wrpperEl.value.scrollHeight * (translateY.value / wrpperEl.value.offsetHeight) - 20,
        behavior: props.behavior
      });
    };
    Vue.watchEffect(() => {
      if (!(wrpperEl == null ? void 0 : wrpperEl.value))
        return;
      isShowBarY.value = wrpperEl.value.offsetHeight < wrpperEl.value.scrollHeight;
      isShowBarX.value = wrpperEl.value.offsetWidth < wrpperEl.value.scrollWidth;
      updateThumb();
    });
    const onMousedown = (isAxisY) => {
      return (evt) => {
        if (!wrpperEl.value)
          return;
        let moveStart = 0;
        let currentTranslate = 0;
        const isTrackEl = evt.target !== thumbXEl.value && evt.target !== thumbYEl.value;
        if (isAxisY) {
          currentTranslate = translateY.value;
          moveStart = evt.screenY;
        } else {
          currentTranslate = translateX.value;
          moveStart = evt.screenX;
        }
        if (isTrackEl) {
          if (isAxisY) {
            translateY.value = evt.offsetY - thumbHeight.value / 2;
            return scrollY();
          }
          translateX.value = evt.offsetX - thumbWidth.value / 2;
          return scrollX();
        }
        const movelistener = (evt2) => {
          if (!wrpperEl.value)
            return;
          const moveEnd = isAxisY ? evt2.screenY : evt2.screenX;
          if (isAxisY) {
            translateY.value = Math.max(Math.min(currentTranslate + moveEnd - moveStart, wrpperEl.value.offsetHeight - thumbHeight.value), 0);
            return scrollY();
          }
          translateX.value = Math.max(Math.min(currentTranslate + moveEnd - moveStart, wrpperEl.value.offsetWidth - thumbWidth.value), 0);
          return scrollX();
        };
        const defaultSelectstart = document.onselectstart;
        const clean = () => {
          document.removeEventListener("mousemove", movelistener);
          document.removeEventListener("mouseup", clean);
          document.onselectstart = defaultSelectstart;
        };
        document.addEventListener("mousemove", movelistener);
        document.addEventListener("mouseup", clean);
        document.onselectstart = () => false;
      };
    };
    const onScroll = (evt) => {
      const target = evt.target;
      if (beforeScrollTop !== target.scrollTop) {
        translateY.value = target.scrollTop * target.offsetHeight / target.scrollHeight;
        beforeScrollTop = target.scrollTop;
      }
      if (beforeScrollLeft !== target.scrollLeft) {
        translateX.value = target.scrollLeft * target.offsetWidth / target.scrollWidth;
        beforeScrollLeft = target.scrollLeft;
      }
      updateThumb();
      emit("scroll", evt);
    };
    const onMouseenter = () => {
      isShowBar.value = true;
    };
    const onMouseleave = () => {
      isShowBar.value = false;
    };
    return () => {
      var _a;
      return Vue.createVNode("div", {
        "class": "ch-scrollbar",
        "style": scrollbarHeight.value,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [Vue.createVNode("div", {
        "ref": wrpperEl,
        "class": "ch-scrollbar-wrpper",
        "onScroll": onScroll
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), Vue.createVNode("div", {
        "class": "ch-scrollbar-bar ch-scrollbar-bar--x",
        "onMousedown": onMousedown(false)
      }, [Vue.withDirectives(Vue.createVNode("div", {
        "ref": thumbXEl,
        "class": "ch-scrollbar-bar-thumb ch-scrollbar-bar-thumb--x",
        "style": `width: ${thumbWidth.value}px; transform: translateX(${translateX.value}px)`
      }, null), [[Vue.vShow, isShowBar.value && isShowBarX.value]])]), Vue.createVNode("div", {
        "class": "ch-scrollbar-bar ch-scrollbar-bar--y",
        "onMousedown": onMousedown(true)
      }, [Vue.withDirectives(Vue.createVNode("div", {
        "ref": thumbYEl,
        "class": "ch-scrollbar-bar-thumb ch-scrollbar-bar-thumb--y",
        "style": `height: ${thumbHeight.value}px; transform: translateY(${translateY.value}px)`
      }, null), [[Vue.vShow, isShowBar.value && isShowBarY.value]])])]);
    };
  }
});
exports.default = Scrollbar;
//# sourceMappingURL=index.js.map
