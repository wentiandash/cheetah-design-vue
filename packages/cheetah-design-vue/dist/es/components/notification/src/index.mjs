import { isVNode, createVNode, render, defineComponent, computed, Transition } from "vue";
import { isObject, isFunction } from "@vue/shared";
import { useToggle } from "../../../composables/useToggle.mjs";
import { uppercaseFirstWord, animation } from "../../../utils/index.mjs";
import { ChButton } from "../../button/index.mjs";
import { ChIcon } from "../../icon/index.mjs";
const notificationProps = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  onCancel: Function,
  onConfirm: Function,
  shakeOff: {
    type: Array,
    default: () => []
  },
  autoClose: {
    type: Boolean,
    default: true
  },
  placement: {
    type: String,
    default: "left"
  }
};
const NotificationConstructor = /* @__PURE__ */ defineComponent({
  name: "Notification",
  props: notificationProps,
  setup(props, {
    slots
  }) {
    const notify = useToggle();
    notify.open();
    props.autoClose && notify.close({
      delay: 3e3
    });
    const animate = computed(() => uppercaseFirstWord(props.placement));
    const isShake = (prop) => props.shakeOff.includes(prop);
    const onCancel = () => {
      var _a;
      return (_a = props.onCancel) == null ? void 0 : _a.call(props, notify);
    };
    const onConfirm = () => {
      var _a;
      return (_a = props.onConfirm) == null ? void 0 : _a.call(props, notify);
    };
    const renderNotification = () => {
      const renderIcon = () => {
        if (!isShake("icon"))
          return createVNode(ChIcon, {
            "name": "bell"
          }, null);
      };
      const renderTitleContent = () => {
        const renderFn = [createVNode("div", {
          "class": "ch-notification-content"
        }, [props.content])];
        if (!isShake("title"))
          renderFn.unshift(createVNode("h3", {
            "class": "ch-notification-title"
          }, [props.title]));
        return renderFn;
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return createVNode(ChButton, {
            "class": "ch-notification-close",
            "mode": "link",
            "state": "info",
            "icon-left": "x-lg",
            "onClick": notify.close
          }, null);
        }
      };
      const renderButton = () => {
        const renderFn = [];
        if (!isShake("cancel-button") && props.cancelButtonText) {
          renderFn.push(createVNode(ChButton, {
            "mode": "link",
            "onClick": onCancel
          }, {
            default: () => [props.cancelButtonText]
          }));
        }
        if (!isShake("confirm-button") && props.confirmButtonText) {
          renderFn.push(createVNode(ChButton, {
            "mode": "link",
            "onClick": onConfirm
          }, {
            default: () => [props.confirmButtonText]
          }));
        }
        return renderFn;
      };
      return createVNode("div", {
        "class": "ch-notification"
      }, [renderIcon(), createVNode("main", null, [renderXButton(), renderTitleContent(), renderButton()])]);
    };
    return () => createVNode(Transition, {
      "enter-active-class": animation(`slideIn${animate.value}`),
      "leave-active-class": animation(`zoomOut${animate.value}`),
      "appear": true
    }, {
      default: () => {
        var _a;
        return [notify.state.value ? ((_a = slots.headless) == null ? void 0 : _a.call(slots)[0]) ?? renderNotification() : null];
      }
    });
  }
});
let notificationsContainer = null;
const Notification = (options) => {
  if (!notificationsContainer) {
    notificationsContainer = document.createElement("div");
    notificationsContainer.className = "ch-notification-container";
    document.body.appendChild(notificationsContainer);
  }
  const props = isObject(options) ? {
    ...options
  } : null;
  const child = isFunction(options) || isVNode(options) ? {
    headless: isFunction(options) ? options : () => options
  } : null;
  const container = document.createElement("div");
  const notification = createVNode(NotificationConstructor, props, child);
  render(notification, container);
  notificationsContainer.classList.add(`__${(options == null ? void 0 : options.placement) || "left"}`);
  notificationsContainer.appendChild(container.firstChild);
};
export {
  NotificationConstructor,
  Notification as default
};
//# sourceMappingURL=index.mjs.map
