"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const _hoisted_1 = { class: "ch-table-cell" };
const _hoisted_2 = {
  key: 0,
  class: "ch-table-header-cell-children"
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "HeaderCell" },
  __name: "header-cell",
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const columnWidth = Vue.computed(() => {
      if (!props.data.children)
        return `width: var(--ch-table-column-${props.data.index}-width);`;
      return "";
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        class: "ch-table-header-cell",
        style: Vue.normalizeStyle(columnWidth.value)
      }, [
        Vue.createElementVNode("div", _hoisted_1, Vue.toDisplayString(_ctx.data.name), 1),
        _ctx.data.children ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2, [
          (Vue.openBlock(true), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(_ctx.data.children, (childCell) => {
            return Vue.openBlock(), Vue.createBlock(_sfc_main, {
              key: childCell.name,
              data: childCell
            }, null, 8, ["data"]);
          }), 128))
        ])) : Vue.createCommentVNode("", true)
      ], 4);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=header-cell.vue2.js.map
