"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Icon" },
  __name: "index",
  props: {
    name: {}
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const onClick = (evt) => emit("click", evt);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("i", {
        class: Vue.normalizeClass(["bi", `bi-${_ctx.name}`]),
        onClick
      }, null, 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
