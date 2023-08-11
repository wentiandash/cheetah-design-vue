"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const vue = require("@floating-ui/vue");
const index = require("../../../utils/index.js");
const useOutside = require("../../../composables/useOutside.js");
const is = require("../../../utils/is.js");
const popoverProps = {
  title: String,
  content: String,
  placement: {
    type: String,
    default: "right"
  },
  trigger: {
    type: [String, Boolean],
    default: "hover"
  }
};
const Popover = /* @__PURE__ */ Vue.defineComponent({
  name: "Popover",
  props: popoverProps,
  setup(props, {
    slots
  }) {
    let flag = true;
    let timer;
    const popperPlacement = Vue.ref("");
    const visible = Vue.ref(false);
    const reference = Vue.ref();
    const popover = Vue.ref();
    const popoverArrow = Vue.ref();
    const popoverContainer = Vue.ref();
    const {
      floatingStyles,
      middlewareData,
      placement
    } = vue.useFloating(reference, popover, {
      placement: props.placement,
      middleware: [vue.inline(), vue.offset(8), vue.flip(), vue.shift({
        crossAxis: true
      }), vue.arrow({
        element: popoverArrow
      })],
      whileElementsMounted(...args) {
        const cleanup = vue.autoUpdate(...args, {
          animationFrame: true
        });
        return cleanup;
      }
    });
    const style = Vue.computed(() => {
      return Object.assign(floatingStyles.value, {
        width: "100%",
        zIndex: 999
      });
    });
    Vue.watchEffect(() => {
      if (is.isBoolean(props.trigger))
        visible.value = props.trigger;
    });
    Vue.watch(middlewareData, () => {
      if (middlewareData.value.arrow && popoverContainer.value && popoverArrow.value) {
        const {
          x,
          y
        } = middlewareData.value.arrow;
        let arrowPlacement = {};
        switch (placement.value) {
          case "top":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              bottom: "-4px"
            };
            break;
          case "bottom":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              top: "-4px"
            };
            break;
          case "left":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              right: "-4px"
            };
            break;
          case "right":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              left: "-4px"
            };
            break;
        }
        Object.assign(popoverArrow.value.style, {
          left: x != null ? `${x}px` : "",
          top: y != null ? `${y}px` : "",
          ...arrowPlacement
        });
      }
    });
    const onClick = () => {
      if (!is.isBoolean(props.trigger) && !visible.value)
        visible.value = true;
    };
    const onMouseenter = () => {
      flag = false;
      visible.value = true;
    };
    const onMouseleave = () => {
      flag = true;
      timer = setTimeout(() => {
        clearTimeout(timer);
        visible.value = !flag;
      }, 300);
    };
    const onReferenceClick = (evt) => {
      if (props.trigger === "click") {
        evt.stopPropagation();
        visible.value = !visible.value;
      }
    };
    const eventProps = Vue.computed(() => {
      if (props.trigger === "hover") {
        return {
          onMouseenter,
          onMouseleave
        };
      }
      const {
        isOutside
      } = useOutside.useOutside(popoverContainer, visible);
      Vue.watchEffect(() => isOutside.value && (visible.value = false));
      return {
        onClick
      };
    });
    const renderPopover = () => Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", null, [props.title]), Vue.createVNode("div", null, [props.content])]);
    return () => {
      var _a;
      return Vue.createVNode("div", Vue.mergeProps({
        "style": "position: relative",
        "ref": popoverContainer
      }, eventProps.value), [Vue.createVNode(Vue.Transition, {
        "enter-active-class": index.animation("fadeIn"),
        "leave-active-class": index.animation("fadeOut"),
        "appear": true
      }, {
        default: () => {
          var _a2, _b;
          return [visible.value && Vue.createVNode("div", {
            "id": "ch-popover",
            "ref": popover,
            "style": style.value,
            "data-popper-placement": popperPlacement.value,
            "class": !slots.headless && "ch-popover-content"
          }, [((_a2 = slots.headless) == null ? void 0 : _a2.call(slots)) || ((_b = slots.default) == null ? void 0 : _b.call(slots)) || renderPopover(), slots.headless ? null : Vue.createVNode("div", {
            "id": "ch-popover-arrow",
            "ref": popoverArrow,
            "data-popper-arrow": true
          }, null)])];
        }
      }), Vue.createVNode("div", {
        "class": "ch-popover-reference",
        "ref": reference,
        "onClick": onReferenceClick
      }, [(_a = slots.reference) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
exports.default = Popover;
//# sourceMappingURL=index.js.map
