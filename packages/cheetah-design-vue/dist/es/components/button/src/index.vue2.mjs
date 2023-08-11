import { defineComponent, ref, inject, openBlock, createElementBlock, normalizeClass, unref, createBlock, createCommentVNode, renderSlot } from "vue";
import _sfc_main$1 from "../../icon/src/index.vue2.mjs";
import "../../button-group/index.mjs";
import { buttonProps } from "./index.mjs";
import { GROUP_BUTTON_KEY } from "../../button-group/src/index.mjs";
const _hoisted_1 = ["type"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Button" },
  __name: "index",
  props: buttonProps,
  emits: ["click"],
  setup(__props) {
    const buttonEl = ref();
    const parent = inject(GROUP_BUTTON_KEY, null);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("button", {
        ref_key: "buttonEl",
        ref: buttonEl,
        type: _ctx.type,
        class: normalizeClass(["ch-button", [
          `ch-button--${((_a = unref(parent)) == null ? void 0 : _a.mode) || _ctx.mode}`,
          `ch-button--${((_b = unref(parent)) == null ? void 0 : _b.state) || _ctx.state}`,
          `ch-button--${((_c = unref(parent)) == null ? void 0 : _c.shape) || _ctx.shape}`,
          `ch-button--${((_d = unref(parent)) == null ? void 0 : _d.size) || _ctx.size}`,
          (((_e = unref(parent)) == null ? void 0 : _e.disabled) || _ctx.disabled) && "is-disabled"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.iconLeft ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          class: normalizeClass({ "icon-left": _ctx.$slots.default }),
          name: _ctx.iconLeft
        }, null, 8, ["class", "name"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default"),
        _ctx.iconRight ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          class: normalizeClass({ "icon-right": _ctx.$slots.default }),
          name: _ctx.iconRight
        }, null, 8, ["class", "name"])) : createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
