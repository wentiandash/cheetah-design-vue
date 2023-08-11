"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const shared = require("@vue/shared");
const useToggle = require("../../../composables/useToggle.js");
const index = require("../../../utils/index.js");
const index$1 = require("../../alert/index.js");
const messageProps = {
  content: String,
  state: {
    type: String,
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  autoClose: {
    type: Boolean,
    default: true
  }
};
const MessageConstructor = /* @__PURE__ */ Vue.defineComponent({
  name: "Message",
  props: messageProps,
  setup(props, {
    slots
  }) {
    const message = useToggle.useToggle();
    message.open();
    props.autoClose && message.close({
      delay: 3e3
    });
    const icon = Vue.computed(() => {
      const icons = {
        info: "info-circle",
        success: "check-circle",
        warning: "exclamation-triangle",
        danger: "x-circle"
      };
      return icons[props.state];
    });
    const renderNotification = () => Vue.createVNode(index$1.ChAlert, {
      "mode": "solid",
      "icon": icon.value,
      "state": props.state,
      "description": props.content,
      "closable": props.closable
    }, null);
    return () => Vue.createVNode(Vue.Transition, {
      "enter-active-class": index.animation("slideInDown"),
      "leave-active-class": index.animation("slideOutUp"),
      "appear": true
    }, {
      default: () => {
        var _a;
        return [message.state.value ? ((_a = slots.headless) == null ? void 0 : _a.call(slots)[0]) ?? renderNotification() : null];
      }
    });
  }
});
let messagesContainer = null;
const Message = (options) => {
  if (!messagesContainer) {
    messagesContainer = document.createElement("div");
    messagesContainer.className = "ch-message-container";
    document.body.appendChild(messagesContainer);
  }
  const vm = Vue.createVNode(MessageConstructor, shared.isObject(options) ? {
    ...options
  } : null, shared.isFunction(options) || Vue.isVNode(options) ? {
    headless: shared.isFunction(options) ? options : () => options
  } : null);
  const container = document.createElement("div");
  Vue.render(vm, container);
  messagesContainer.appendChild(container.firstChild);
};
exports.MessageConstructor = MessageConstructor;
exports.default = Message;
//# sourceMappingURL=index.js.map
