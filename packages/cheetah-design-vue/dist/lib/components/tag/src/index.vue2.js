"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index = require("../../icon/index.js");
const _hoisted_1 = {
  key: 0,
  class: "is-indicator"
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Tag" },
  __name: "index",
  props: {
    mode: { default: "solid" },
    shape: { default: "rounded" },
    state: { default: "primary" },
    closable: {},
    indicator: {}
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const handleClose = (evt) => {
      emits("close", evt);
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        class: Vue.normalizeClass(["ch-tag", [`ch-tag--${_ctx.mode}`, `ch-tag--${_ctx.shape}`, `ch-tag--${_ctx.state}`]])
      }, [
        _ctx.indicator ? (Vue.openBlock(), Vue.createElementBlock("i", _hoisted_1)) : Vue.createCommentVNode("", true),
        Vue.renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (Vue.openBlock(), Vue.createBlock(Vue.unref(index.ChIcon), {
          key: 1,
          class: "is-closable",
          name: "x-lg",
          onClick: handleClose
        })) : Vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
