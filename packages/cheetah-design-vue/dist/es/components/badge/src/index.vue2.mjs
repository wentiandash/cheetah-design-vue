import { defineComponent, computed, openBlock, createElementBlock, renderSlot, createElementVNode, normalizeClass, toDisplayString } from "vue";
import { badgeProps } from "./index.mjs";
const _hoisted_1 = { class: "ch-badge-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Badge" },
  __name: "index",
  props: badgeProps,
  setup(__props) {
    const props = __props;
    const bagdeValue = computed(() => {
      if (Number(props.value) >= props.max)
        return `${props.max}+`;
      return props.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("div", {
          class: normalizeClass(["ch-badge", [
            {
              "is-position": _ctx.$slots.default,
              "is-dot": !_ctx.value || _ctx.dot,
              "is-hidden": _ctx.hidden
            },
            `ch-badge--${_ctx.state}`
          ]])
        }, toDisplayString(_ctx.dot ? "" : bagdeValue.value), 3)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
