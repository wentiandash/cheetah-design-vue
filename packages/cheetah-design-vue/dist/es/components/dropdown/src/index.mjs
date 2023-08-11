import { defineComponent, createVNode, Fragment, withDirectives, vShow, createTextVNode, mergeProps } from "vue";
import { ChDropdown } from "../index.mjs";
import { ChButton } from "../../button/index.mjs";
import { ChBadge } from "../../badge/index.mjs";
import { ChPopover } from "../../popover/index.mjs";
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
const Dropdown = /* @__PURE__ */ defineComponent({
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
    const renderMenuButton = (item) => createVNode(Fragment, null, [item.title && createVNode("div", {
      "class": "ch-dropdown-title"
    }, [item.title]), createVNode(ChButton, mergeProps({
      "mode": "ghost",
      "size": "small",
      "state": "info",
      "disabled": item.disabled,
      "onClick": onClick(item)
    }, item.button), {
      default: () => {
        var _a;
        return [createVNode("div", {
          "class": "ch-dropdown-button"
        }, [item.name, ((_a = item.button) == null ? void 0 : _a.badge) && createVNode(ChBadge, item.button.badge, null)])];
      }
    }), item.divider && createVNode("div", {
      "class": "ch-dropdown-divider"
    }, null)]);
    const renderDropdown = () => createVNode(Fragment, null, [withDirectives(createVNode("div", {
      "class": "ch-dropdown-menu"
    }, [props.data.map((item) => {
      if (item.children) {
        return createVNode(ChDropdown, {
          "class": "ch-dropdown-child",
          "data": item.children,
          "trigger": props.trigger,
          "placement": "right-start"
        }, {
          reference: () => renderMenuButton(item)
        });
      }
      return renderMenuButton(item);
    })]), [[vShow, props.data.length]]), withDirectives(createVNode("div", {
      "class": "ch-dropdown-menu"
    }, [createTextVNode("No Data")]), [[vShow, !props.data.length]])]);
    return () => createVNode(ChPopover, props, {
      reference: slots.reference,
      headless: slots.headless || renderDropdown
    });
  }
});
export {
  Dropdown as default
};
//# sourceMappingURL=index.mjs.map
