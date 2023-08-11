"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const shared = require("@vue/shared");
const useToggle = require("../../../composables/useToggle.js");
const index = require("../../../utils/index.js");
const index$2 = require("../../button/index.js");
const index$1 = require("../../icon/index.js");
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
const NotificationConstructor = /* @__PURE__ */ Vue.defineComponent({
  name: "Notification",
  props: notificationProps,
  setup(props, {
    slots
  }) {
    const notify = useToggle.useToggle();
    notify.open();
    props.autoClose && notify.close({
      delay: 3e3
    });
    const animate = Vue.computed(() => index.uppercaseFirstWord(props.placement));
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
          return Vue.createVNode(index$1.ChIcon, {
            "name": "bell"
          }, null);
      };
      const renderTitleContent = () => {
        const renderFn = [Vue.createVNode("div", {
          "class": "ch-notification-content"
        }, [props.content])];
        if (!isShake("title"))
          renderFn.unshift(Vue.createVNode("h3", {
            "class": "ch-notification-title"
          }, [props.title]));
        return renderFn;
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return Vue.createVNode(index$2.ChButton, {
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
          renderFn.push(Vue.createVNode(index$2.ChButton, {
            "mode": "link",
            "onClick": onCancel
          }, {
            default: () => [props.cancelButtonText]
          }));
        }
        if (!isShake("confirm-button") && props.confirmButtonText) {
          renderFn.push(Vue.createVNode(index$2.ChButton, {
            "mode": "link",
            "onClick": onConfirm
          }, {
            default: () => [props.confirmButtonText]
          }));
        }
        return renderFn;
      };
      return Vue.createVNode("div", {
        "class": "ch-notification"
      }, [renderIcon(), Vue.createVNode("main", null, [renderXButton(), renderTitleContent(), renderButton()])]);
    };
    return () => Vue.createVNode(Vue.Transition, {
      "enter-active-class": index.animation(`slideIn${animate.value}`),
      "leave-active-class": index.animation(`zoomOut${animate.value}`),
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
  const props = shared.isObject(options) ? {
    ...options
  } : null;
  const child = shared.isFunction(options) || Vue.isVNode(options) ? {
    headless: shared.isFunction(options) ? options : () => options
  } : null;
  const container = document.createElement("div");
  const notification = Vue.createVNode(NotificationConstructor, props, child);
  Vue.render(notification, container);
  notificationsContainer.classList.add(`__${(options == null ? void 0 : options.placement) || "left"}`);
  notificationsContainer.appendChild(container.firstChild);
};
exports.NotificationConstructor = NotificationConstructor;
exports.default = Notification;
//# sourceMappingURL=index.js.map
