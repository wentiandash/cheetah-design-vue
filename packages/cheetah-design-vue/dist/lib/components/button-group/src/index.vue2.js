"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
require("../index.js");
const index = require("./index.js");
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "ButtonGroup" },
  __name: "index",
  props: {
    mode: { default: "solid" },
    state: { default: "primary" },
    size: { default: "medium" },
    shape: { default: "rounded" },
    vertical: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    Vue.provide(index.GROUP_BUTTON_KEY, props);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        class: Vue.normalizeClass(["ch-button-group", { "is-vertical": _ctx.vertical }])
      }, [
        Vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
