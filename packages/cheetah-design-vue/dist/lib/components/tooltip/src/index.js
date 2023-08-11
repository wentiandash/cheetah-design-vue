"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index = require("../../popover/index.js");
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
const Tooltip = /* @__PURE__ */ Vue.defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  setup(props, {
    slots
  }) {
    const renderTooptip = () => Vue.createVNode("div", {
      "class": "ch-tooltip"
    }, [props.content]);
    return () => Vue.createVNode(index.ChPopover, props, {
      headless: slots.headless || renderTooptip,
      reference: slots.reference
    });
  }
});
exports.default = Tooltip;
//# sourceMappingURL=index.js.map
