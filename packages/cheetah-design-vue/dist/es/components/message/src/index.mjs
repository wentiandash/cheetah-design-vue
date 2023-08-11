import { createVNode, isVNode, render, defineComponent, computed, Transition } from "vue";
import { isObject, isFunction } from "@vue/shared";
import { useToggle } from "../../../composables/useToggle.mjs";
import { animation } from "../../../utils/index.mjs";
import { ChAlert } from "../../alert/index.mjs";
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
const MessageConstructor = /* @__PURE__ */ defineComponent({
  name: "Message",
  props: messageProps,
  setup(props, {
    slots
  }) {
    const message = useToggle();
    message.open();
    props.autoClose && message.close({
      delay: 3e3
    });
    const icon = computed(() => {
      const icons = {
        info: "info-circle",
        success: "check-circle",
        warning: "exclamation-triangle",
        danger: "x-circle"
      };
      return icons[props.state];
    });
    const renderNotification = () => createVNode(ChAlert, {
      "mode": "solid",
      "icon": icon.value,
      "state": props.state,
      "description": props.content,
      "closable": props.closable
    }, null);
    return () => createVNode(Transition, {
      "enter-active-class": animation("slideInDown"),
      "leave-active-class": animation("slideOutUp"),
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
  const vm = createVNode(MessageConstructor, isObject(options) ? {
    ...options
  } : null, isFunction(options) || isVNode(options) ? {
    headless: isFunction(options) ? options : () => options
  } : null);
  const container = document.createElement("div");
  render(vm, container);
  messagesContainer.appendChild(container.firstChild);
};
export {
  MessageConstructor,
  Message as default
};
//# sourceMappingURL=index.mjs.map
