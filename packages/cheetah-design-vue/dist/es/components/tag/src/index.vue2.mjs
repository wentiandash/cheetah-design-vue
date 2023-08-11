import { defineComponent, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot, createBlock, unref } from "vue";
import { ChIcon } from "../../icon/index.mjs";
const _hoisted_1 = {
  key: 0,
  class: "is-indicator"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ch-tag", [`ch-tag--${_ctx.mode}`, `ch-tag--${_ctx.shape}`, `ch-tag--${_ctx.state}`]])
      }, [
        _ctx.indicator ? (openBlock(), createElementBlock("i", _hoisted_1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (openBlock(), createBlock(unref(ChIcon), {
          key: 1,
          class: "is-closable",
          name: "x-lg",
          onClick: handleClose
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
