import { defineComponent, provide, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import "../index.mjs";
import { GROUP_BUTTON_KEY } from "./index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    provide(GROUP_BUTTON_KEY, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ch-button-group", { "is-vertical": _ctx.vertical }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
