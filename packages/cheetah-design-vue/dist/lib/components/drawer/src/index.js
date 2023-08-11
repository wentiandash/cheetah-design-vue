"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index = require("../../../utils/index.js");
const useModal = require("../../../composables/useModal.js");
const index$1 = require("../../button/index.js");
const darwerProps = {
  shakeOff: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: "left"
  },
  fullscreen: Boolean
};
const Drawer = /* @__PURE__ */ Vue.defineComponent({
  name: "Drawer",
  props: darwerProps,
  emits: ["open", "close"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal.useModal(emit);
    const style = Vue.computed(() => {
      if (props.placement === "left" || props.placement === "right") {
        return {
          minWidth: props.fullscreen ? "100%" : "350px",
          top: 0,
          bottom: 0,
          [props.placement]: 0
        };
      } else if (props.placement === "top" || props.placement === "bottom") {
        return {
          height: props.fullscreen ? "100%" : 0,
          minHeight: "350px",
          left: 0,
          right: 0,
          [props.placement]: 0
        };
      }
      return {};
    });
    const animate = Vue.computed(() => {
      const inSuffix = index.uppercaseFirstWord(props.placement === "top" ? "down" : props.placement === "bottom" ? "up" : props.placement);
      const outSuffix = index.uppercaseFirstWord(props.placement === "top" ? "up" : props.placement === "bottom" ? "down" : props.placement);
      return {
        enter: index.animation(`slideIn${inSuffix}`),
        leave: index.animation(`slideOut${outSuffix}`)
      };
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const renderMask = () => {
      if (!isShake("mask"))
        return Vue.withDirectives(Vue.createVNode("div", {
          "class": "ch-mask"
        }, null), [[Vue.vShow, modal.state.value]]);
    };
    const renderDrawer = () => {
      var _a;
      const renderHeader = () => {
        if (isShake("header"))
          return;
        const renderXButton = () => {
          if (!isShake("x-button")) {
            return Vue.createVNode(index$1.ChButton, {
              "mode": "link",
              "state": "info",
              "icon-left": "x-lg",
              "onClick": modal.close
            }, null);
          }
        };
        return Vue.createVNode("header", null, [Vue.createVNode("h3", null, [Vue.createTextVNode("Darwer header")]), renderXButton()]);
      };
      return Vue.createVNode("div", {
        "class": "ch-drawer-default"
      }, [renderHeader(), Vue.createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
    return () => Vue.createVNode(Vue.Teleport, {
      "to": "body"
    }, {
      default: () => [renderMask(), Vue.createVNode(Vue.Transition, {
        "enter-active-class": index.animation(animate.value.enter),
        "leave-active-class": index.animation(animate.value.leave),
        "appear": true
      }, {
        default: () => {
          var _a;
          return [Vue.withDirectives(Vue.createVNode("div", {
            "ref": modal,
            "class": "ch-drawer",
            "style": style.value
          }, [((_a = slots.headless) == null ? void 0 : _a.call(slots)) || renderDrawer()]), [[Vue.vShow, modal.state.value]])];
        }
      })]
    });
  }
});
exports.default = Drawer;
//# sourceMappingURL=index.js.map
