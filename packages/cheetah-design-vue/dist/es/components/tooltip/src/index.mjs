import { defineComponent, createVNode } from "vue";
import { ChPopover } from "../../popover/index.mjs";
const tooltipProps = {
  content: String,
  placement: {
    type: String,
    default: "right"
  },
  trigger: {
    type: String,
    default: "hover"
  }
};
const Tooltip = /* @__PURE__ */ defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  setup(props, {
    slots
  }) {
    const renderTooptip = () => createVNode("div", {
      "class": "ch-tooltip"
    }, [props.content]);
    return () => createVNode(ChPopover, props, {
      headless: slots.headless || renderTooptip,
      reference: slots.reference
    });
  }
});
export {
  Tooltip as default
};
//# sourceMappingURL=index.mjs.map
