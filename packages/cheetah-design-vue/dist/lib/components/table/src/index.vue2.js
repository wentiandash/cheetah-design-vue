"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const headerCell_vue_vue_type_script_setup_true_lang = require("./header-cell.vue2.js");
const row_vue_vue_type_script_setup_true_lang = require("./row.vue2.js");
const index = require("./index.js");
const _hoisted_1 = { class: "ch-table-body" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Tables" },
  __name: "index",
  props: {
    width: {},
    header: {},
    data: {},
    fixedHeader: { type: Boolean },
    striped: { type: Boolean },
    border: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const tableEl = Vue.ref();
    index.genTableConfig(props, tableEl);
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        ref_key: "tableEl",
        ref: tableEl,
        class: Vue.normalizeClass(["ch-table", { "ch-table--border": !_ctx.border }])
      }, [
        Vue.createElementVNode("div", {
          class: Vue.normalizeClass(["ch-table-header", { "ch-table-header--fixed": _ctx.fixedHeader }])
        }, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.header, (cell, index2) => {
            return Vue.openBlock(), Vue.createBlock(headerCell_vue_vue_type_script_setup_true_lang.default, {
              key: index2,
              data: cell
            }, null, 8, ["data"]);
          }), 128))
        ], 2),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createVNode(row_vue_vue_type_script_setup_true_lang.default, { data: _ctx.data }, null, 8, ["data"])
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
