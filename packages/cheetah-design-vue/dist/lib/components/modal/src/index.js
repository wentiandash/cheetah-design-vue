"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index = require("../../../utils/index.js");
const useModal = require("../../../composables/useModal.js");
const useDraggable = require("../../../composables/useDraggable.js");
const index_vue_vue_type_script_setup_true_lang = require("../../button/src/index.vue2.js");
const modalProps = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
  draggable: Boolean,
  shakeOff: {
    type: Array,
    default: () => []
  }
};
const Modal = /* @__PURE__ */ Vue.defineComponent({
  name: "Modal",
  props: modalProps,
  emits: ["open", "close", "cancel", "confirm"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal.useModal(emit);
    useDraggable.useDraggable(modal, {
      translateX: Vue.computed(() => modal.state.value ? modal.value.clientWidth / 2 : 0)
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const onCancel = () => modal.close() && emit("cancel");
    const onConfirm = () => emit("confirm");
    const onClose = () => modal.close();
    const renderHeader = () => {
      if (!isShake("header") && props.title) {
        return Vue.createVNode("header", null, [Vue.createVNode("h3", null, [props.title])]);
      }
    };
    const renderFooter = () => {
      if (isShake("footer"))
        return;
      const renderButtons = [];
      if (!isShake("cancel-button") && props.cancelButtonText) {
        renderButtons.push(Vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, {
          "mode": "outline",
          "onClick": onCancel
        }, {
          default: () => [props.cancelButtonText]
        }));
      }
      if (!isShake("confirm-button") && props.confirmButtonText) {
        renderButtons.push(Vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, {
          "mode": "solid",
          "onClick": onConfirm
        }, {
          default: () => [props.confirmButtonText]
        }));
      }
      return Vue.createVNode("footer", null, [Vue.createVNode("div", {
        "class": "ch-modal-button"
      }, [renderButtons])]);
    };
    const renderModal = () => {
      var _a;
      const renderMask = () => {
        if (!isShake("mask"))
          return Vue.createVNode("div", {
            "class": "ch-mask"
          }, null);
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return Vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, {
            "class": "ch-modal-x",
            "mode": "link",
            "state": "info",
            "icon-left": "x-lg",
            "onClick": onClose
          }, null);
        }
      };
      return Vue.createVNode(Vue.Fragment, null, [renderMask(), Vue.createVNode("div", {
        "ref": modal,
        "class": "ch-modal",
        "draggable": props.draggable
      }, [renderXButton(), renderHeader(), Vue.createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderFooter()])]);
    };
    const renderHeadless = () => {
      var _a;
      return Vue.createVNode("div", {
        "ref": modal
      }, [(_a = slots.headless) == null ? void 0 : _a.call(slots)]);
    };
    return () => Vue.createVNode(Vue.Teleport, {
      "to": "body"
    }, {
      default: () => [Vue.createVNode(Vue.Transition, {
        "enter-active-class": index.animation("fadeIn"),
        "leave-active-class": index.animation("fadeOut"),
        "appear": true
      }, {
        default: () => [Vue.withDirectives(Vue.createVNode("div", {
          "class": "ch-modal-container"
        }, [slots.headless ? renderHeadless() : renderModal()]), [[Vue.vShow, modal.state.value]])]
      })]
    });
  }
});
exports.default = Modal;
//# sourceMappingURL=index.js.map
