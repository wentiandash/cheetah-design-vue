"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index$1 = require("../index.js");
const index$2 = require("../../button/index.js");
const index$3 = require("../../badge/index.js");
const index = require("../../popover/index.js");
const dropdownProps = {
  placement: {
    type: String,
    default: "bottom"
  },
  trigger: {
    type: [String, Boolean],
    default: "hover"
  },
  data: {
    type: Array,
    default: () => []
  }
};
const Dropdown = /* @__PURE__ */ Vue.defineComponent({
  name: "Dropdown",
  props: dropdownProps,
  emits: ["click"],
  setup(props, {
    slots,
    emit
  }) {
    const onClick = (item) => {
      return (evt) => {
        emit("click", item);
        if (item.callback)
          item.callback();
        if (!item.children) {
          evt.stopPropagation();
          document.documentElement.click();
        }
      };
    };
    const renderMenuButton = (item) => Vue.createVNode(Vue.Fragment, null, [item.title && Vue.createVNode("div", {
      "class": "ch-dropdown-title"
    }, [item.title]), Vue.createVNode(index$2.ChButton, Vue.mergeProps({
      "mode": "ghost",
      "size": "small",
      "state": "info",
      "disabled": item.disabled,
      "onClick": onClick(item)
    }, item.button), {
      default: () => {
        var _a;
        return [Vue.createVNode("div", {
          "class": "ch-dropdown-button"
        }, [item.name, ((_a = item.button) == null ? void 0 : _a.badge) && Vue.createVNode(index$3.ChBadge, item.button.badge, null)])];
      }
    }), item.divider && Vue.createVNode("div", {
      "class": "ch-dropdown-divider"
    }, null)]);
    const renderDropdown = () => Vue.createVNode(Vue.Fragment, null, [Vue.withDirectives(Vue.createVNode("div", {
      "class": "ch-dropdown-menu"
    }, [props.data.map((item) => {
      if (item.children) {
        return Vue.createVNode(index$1.ChDropdown, {
          "class": "ch-dropdown-child",
          "data": item.children,
          "trigger": props.trigger,
          "placement": "right-start"
        }, {
          reference: () => renderMenuButton(item)
        });
      }
      return renderMenuButton(item);
    })]), [[Vue.vShow, props.data.length]]), Vue.withDirectives(Vue.createVNode("div", {
      "class": "ch-dropdown-menu"
    }, [Vue.createTextVNode("No Data")]), [[Vue.vShow, !props.data.length]])]);
    return () => Vue.createVNode(index.ChPopover, props, {
      reference: slots.reference,
      headless: slots.headless || renderDropdown
    });
  }
});
exports.default = Dropdown;
//# sourceMappingURL=index.js.map
