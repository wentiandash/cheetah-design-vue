import { defineComponent, computed, createVNode, Teleport, Transition, withDirectives, vShow, Fragment } from "vue";
import { animation } from "../../../utils/index.mjs";
import { useModal } from "../../../composables/useModal.mjs";
import { useDraggable } from "../../../composables/useDraggable.mjs";
import _sfc_main from "../../button/src/index.vue2.mjs";
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
const Modal = /* @__PURE__ */ defineComponent({
  name: "Modal",
  props: modalProps,
  emits: ["open", "close", "cancel", "confirm"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal(emit);
    useDraggable(modal, {
      translateX: computed(() => modal.state.value ? modal.value.clientWidth / 2 : 0)
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const onCancel = () => modal.close() && emit("cancel");
    const onConfirm = () => emit("confirm");
    const onClose = () => modal.close();
    const renderHeader = () => {
      if (!isShake("header") && props.title) {
        return createVNode("header", null, [createVNode("h3", null, [props.title])]);
      }
    };
    const renderFooter = () => {
      if (isShake("footer"))
        return;
      const renderButtons = [];
      if (!isShake("cancel-button") && props.cancelButtonText) {
        renderButtons.push(createVNode(_sfc_main, {
          "mode": "outline",
          "onClick": onCancel
        }, {
          default: () => [props.cancelButtonText]
        }));
      }
      if (!isShake("confirm-button") && props.confirmButtonText) {
        renderButtons.push(createVNode(_sfc_main, {
          "mode": "solid",
          "onClick": onConfirm
        }, {
          default: () => [props.confirmButtonText]
        }));
      }
      return createVNode("footer", null, [createVNode("div", {
        "class": "ch-modal-button"
      }, [renderButtons])]);
    };
    const renderModal = () => {
      var _a;
      const renderMask = () => {
        if (!isShake("mask"))
          return createVNode("div", {
            "class": "ch-mask"
          }, null);
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return createVNode(_sfc_main, {
            "class": "ch-modal-x",
            "mode": "link",
            "state": "info",
            "icon-left": "x-lg",
            "onClick": onClose
          }, null);
        }
      };
      return createVNode(Fragment, null, [renderMask(), createVNode("div", {
        "ref": modal,
        "class": "ch-modal",
        "draggable": props.draggable
      }, [renderXButton(), renderHeader(), createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderFooter()])]);
    };
    const renderHeadless = () => {
      var _a;
      return createVNode("div", {
        "ref": modal
      }, [(_a = slots.headless) == null ? void 0 : _a.call(slots)]);
    };
    return () => createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [createVNode(Transition, {
        "enter-active-class": animation("fadeIn"),
        "leave-active-class": animation("fadeOut"),
        "appear": true
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "ch-modal-container"
        }, [slots.headless ? renderHeadless() : renderModal()]), [[vShow, modal.state.value]])]
      })]
    });
  }
});
export {
  Modal as default
};
//# sourceMappingURL=index.mjs.map
