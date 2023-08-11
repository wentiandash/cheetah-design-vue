"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index_vue_vue_type_script_setup_true_lang$1 = require("../../button/src/index.vue2.js");
const index_vue_vue_type_script_setup_true_lang = require("../../icon/src/index.vue2.js");
const index$1 = require("../../../utils/index.js");
const index = require("./index.js");
const _hoisted_1 = {
  key: 0,
  class: "ch-alert--title"
};
const _hoisted_2 = {
  key: 1,
  class: "ch-alert--description"
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Alert" },
  __name: "index",
  props: index.alertProps,
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const visible = Vue.ref(true);
    const alertEl = Vue.ref();
    const handleClose = (evt) => {
      visible.value = false;
      emits("close", evt);
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createBlock(Vue.Transition, {
        "leave-active-class": Vue.unref(index$1.animation)("fadeOut")
      }, {
        default: Vue.withCtx(() => [
          visible.value ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 0,
            ref_key: "alertEl",
            ref: alertEl,
            class: Vue.normalizeClass(["ch-alert", [`ch-alert--${_ctx.mode}`, `ch-alert--${_ctx.state}`]])
          }, [
            _ctx.icon ? (Vue.openBlock(), Vue.createBlock(index_vue_vue_type_script_setup_true_lang.default, {
              key: 0,
              name: _ctx.icon
            }, null, 8, ["name"])) : Vue.createCommentVNode("", true),
            Vue.createElementVNode("div", null, [
              Vue.renderSlot(_ctx.$slots, "title"),
              !_ctx.$slots.title && _ctx.title ? (Vue.openBlock(), Vue.createElementBlock("span", _hoisted_1, Vue.toDisplayString(_ctx.title), 1)) : Vue.createCommentVNode("", true),
              Vue.renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default && _ctx.description ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2, Vue.toDisplayString(_ctx.description), 1)) : Vue.createCommentVNode("", true)
            ]),
            _ctx.closable ? (Vue.openBlock(), Vue.createBlock(index_vue_vue_type_script_setup_true_lang$1.default, {
              key: 1,
              mode: "link",
              state: "info",
              "icon-left": "x-lg",
              onClick: handleClose
            })) : Vue.createCommentVNode("", true)
          ], 2)) : Vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["leave-active-class"]);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
