"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index$1 = require("../../scrollbar/index.js");
const index = require("../../../utils/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
const virtualListProps = {
  listHeight: Number,
  listItemCount: {
    type: Number,
    default: 0
  },
  estimatedListItemHeight: {
    type: Number,
    required: true
  }
};
const VirtualList = /* @__PURE__ */ Vue.defineComponent({
  name: "VirtualList",
  props: virtualListProps,
  setup(props, {
    slots
  }) {
    const start = Vue.ref(0);
    const step = Vue.ref(0);
    const end = Vue.computed(() => start.value + step.value);
    const translate = Vue.ref(0);
    const listHeight = Vue.ref(props.estimatedListItemHeight * props.listItemCount);
    const scrollbarEl = Vue.ref();
    const realAreaEl = Vue.ref();
    const itemInfos = Vue.computed(() => index.range(1, props.listItemCount, 1).map((_, index2) => ({
      index: index2,
      height: props.estimatedListItemHeight,
      top: props.estimatedListItemHeight * index2,
      bottom: props.estimatedListItemHeight * (index2 + 1)
    })));
    const updateTranslate = () => {
      translate.value = start.value >= 1 ? itemInfos.value[start.value - 1].bottom : 0;
    };
    const getStart = (scrollTop = 0) => {
      var _a;
      return (_a = itemInfos.value.find((item) => item.bottom > scrollTop)) == null ? void 0 : _a.index;
    };
    const virtualAreaStyle = Vue.computed(() => ({
      height: `${listHeight.value}px`
    }));
    const realAreaStyle = Vue.computed(() => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${translate.value}px)`
    }));
    Vue.onMounted(() => {
      if (!scrollbarEl.value)
        return;
      const height = props.listHeight ? props.listHeight : scrollbarEl.value.$el.offsetHeight;
      step.value = Math.ceil(height / props.estimatedListItemHeight);
    });
    Vue.onUpdated(() => {
      let index2 = start.value;
      const items = [...realAreaEl.value.children];
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const height = rect.height;
        const diff = itemInfos.value[index2].height - height;
        if (diff) {
          itemInfos.value[index2].height = height;
          itemInfos.value[index2].bottom = itemInfos.value[index2].bottom - diff;
          for (let j = index2 + 1; j < itemInfos.value.length; j++) {
            itemInfos.value[j].top = itemInfos.value[j - 1].bottom;
            itemInfos.value[j].bottom = itemInfos.value[j].bottom - diff;
          }
        }
        if (index2 < itemInfos.value.length - 1)
          index2++;
      });
      listHeight.value = itemInfos.value[itemInfos.value.length - 1].bottom;
      updateTranslate();
    });
    const onScroll = (evt) => {
      const scrollTop = evt.target.scrollTop;
      start.value = getStart(scrollTop);
    };
    const renderVirtualList = () => {
      var _a, _b;
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
        "style": virtualAreaStyle.value
      }, null), Vue.createVNode("div", {
        "ref": realAreaEl,
        "style": realAreaStyle.value
      }, [(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children) == null ? void 0 : _b.slice(start.value, end.value)])]);
    };
    return () => {
      let _slot;
      return Vue.createVNode(index$1.ChScrollbar, {
        "ref": scrollbarEl,
        "height": props.listHeight,
        "onScroll": onScroll
      }, _isSlot(_slot = renderVirtualList()) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
exports.default = VirtualList;
//# sourceMappingURL=index.js.map
