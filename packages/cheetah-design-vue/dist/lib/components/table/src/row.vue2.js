"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const copy = require("./copy.js");
const cell_vue_vue_type_script_setup_true_lang = require("./cell.vue2.js");
const index = require("./index.js");
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Row" },
  __name: "row",
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.data, (row) => {
        return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, {
          key: row[_ctx.key]
        }, [
          Vue.createElementVNode("div", {
            class: Vue.normalizeClass(["ch-table-row", { "ch-table-row--striped": Vue.unref(index.config).striped }])
          }, [
            (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(Vue.unref(index.config).columns, (col, colIndex) => {
              return Vue.openBlock(), Vue.createBlock(cell_vue_vue_type_script_setup_true_lang.default, {
                key: colIndex,
                data: row[col.key],
                style: Vue.normalizeStyle(`width: var(--ch-table-column-${colIndex}-width);`),
                onContextmenu: ($event) => Vue.unref(copy.handelCopy)(row, col.key, row[col.key])
              }, null, 8, ["data", "style", "onContextmenu"]);
            }), 128))
          ], 2),
          row.children ? (Vue.openBlock(), Vue.createBlock(_sfc_main, {
            key: 0,
            data: row.children
          }, null, 8, ["data"])) : Vue.createCommentVNode("", true)
        ], 64);
      }), 128);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=row.vue2.js.map
