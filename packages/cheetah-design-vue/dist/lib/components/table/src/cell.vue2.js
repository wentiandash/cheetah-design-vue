"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const _hoisted_1 = { class: "ch-table-cell" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "cell",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, Vue.toDisplayString(_ctx.data), 1);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=cell.vue2.js.map
