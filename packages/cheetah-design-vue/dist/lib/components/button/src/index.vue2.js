"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index_vue_vue_type_script_setup_true_lang = require("../../icon/src/index.vue2.js");
require("../../button-group/index.js");
const index = require("./index.js");
const index$1 = require("../../button-group/src/index.js");
const _hoisted_1 = ["type"];
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Button" },
  __name: "index",
  props: index.buttonProps,
  emits: ["click"],
  setup(__props) {
    const buttonEl = Vue.ref();
    const parent = Vue.inject(index$1.GROUP_BUTTON_KEY, null);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return Vue.openBlock(), Vue.createElementBlock("button", {
        ref_key: "buttonEl",
        ref: buttonEl,
        type: _ctx.type,
        class: Vue.normalizeClass(["ch-button", [
          `ch-button--${((_a = Vue.unref(parent)) == null ? void 0 : _a.mode) || _ctx.mode}`,
          `ch-button--${((_b = Vue.unref(parent)) == null ? void 0 : _b.state) || _ctx.state}`,
          `ch-button--${((_c = Vue.unref(parent)) == null ? void 0 : _c.shape) || _ctx.shape}`,
          `ch-button--${((_d = Vue.unref(parent)) == null ? void 0 : _d.size) || _ctx.size}`,
          (((_e = Vue.unref(parent)) == null ? void 0 : _e.disabled) || _ctx.disabled) && "is-disabled"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.iconLeft ? (Vue.openBlock(), Vue.createBlock(index_vue_vue_type_script_setup_true_lang.default, {
          key: 0,
          class: Vue.normalizeClass({ "icon-left": _ctx.$slots.default }),
          name: _ctx.iconLeft
        }, null, 8, ["class", "name"])) : Vue.createCommentVNode("", true),
        Vue.renderSlot(_ctx.$slots, "default"),
        _ctx.iconRight ? (Vue.openBlock(), Vue.createBlock(index_vue_vue_type_script_setup_true_lang.default, {
          key: 1,
          class: Vue.normalizeClass({ "icon-right": _ctx.$slots.default }),
          name: _ctx.iconRight
        }, null, 8, ["class", "name"])) : Vue.createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
