"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index = require("./index.js");
const _hoisted_1 = { class: "ch-badge-container" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Badge" },
  __name: "index",
  props: index.badgeProps,
  setup(__props) {
    const props = __props;
    const bagdeValue = Vue.computed(() => {
      if (Number(props.value) >= props.max)
        return `${props.max}+`;
      return props.value;
    });
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.renderSlot(_ctx.$slots, "default"),
        Vue.createElementVNode("div", {
          class: Vue.normalizeClass(["ch-badge", [
            {
              "is-position": _ctx.$slots.default,
              "is-dot": !_ctx.value || _ctx.dot,
              "is-hidden": _ctx.hidden
            },
            `ch-badge--${_ctx.state}`
          ]])
        }, Vue.toDisplayString(_ctx.dot ? "" : bagdeValue.value), 3)
      ]);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
