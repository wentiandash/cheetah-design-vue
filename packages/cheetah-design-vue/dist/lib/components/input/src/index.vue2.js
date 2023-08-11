"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index = require("../../icon/index.js");
const input = require("./input.js");
const _hoisted_1 = {
  key: 0,
  class: "__prepend"
};
const _hoisted_2 = {
  key: 0,
  class: "__prefix"
};
const _hoisted_3 = ["type", "value", "placeholder", "disabled"];
const _hoisted_4 = { class: "ch-input-tip" };
const _hoisted_5 = {
  key: 1,
  class: "__append"
};
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  ...{ name: "Input" },
  __name: "index",
  props: input.inputProps,
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = Vue.useSlots();
    const verify = Vue.ref(false);
    const state = Vue.ref("primary");
    const tip = Vue.ref(props.infoTip);
    const isFocus = Vue.ref(false);
    const inputEl = Vue.ref();
    const inputStyle = Vue.computed(() => {
      return {
        borderTopLeftRadius: slots.prepend && 0,
        borderBottomLeftRadius: slots.prepend && 0,
        borderTopRightRadius: slots.append && 0,
        borderBottomRightRadius: slots.append && 0
      };
    });
    Vue.watchEffect(() => {
      const value = props.modelValue.toString();
      if (value && props.pattern) {
        verify.value = props.pattern.test(value);
        if (verify.value) {
          state.value = "success";
          tip.value = props.successTip;
        } else if (!verify.value) {
          state.value = "error";
          tip.value = props.errorTip;
        }
      } else {
        state.value = "primary";
        tip.value = props.infoTip;
      }
    });
    const handleFocus = () => {
      isFocus.value = true;
    };
    const handleClearable = (evt) => {
      var _a;
      if (props.modelValue)
        evt.stopPropagation();
      if (props.clearable) {
        (_a = inputEl.value) == null ? void 0 : _a.focus();
        emit("update:modelValue", "");
      }
    };
    const handleInput = () => {
      var _a;
      emit("update:modelValue", (_a = inputEl.value) == null ? void 0 : _a.value);
    };
    const handleBlur = (evt) => {
      emit("blur", evt);
      isFocus.value = false;
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", {
        class: Vue.normalizeClass(["ch-input-container", `ch-input--${_ctx.size}`])
      }, [
        _ctx.$slots.prepend ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
          Vue.renderSlot(_ctx.$slots, "prepend")
        ])) : Vue.createCommentVNode("", true),
        Vue.createElementVNode("div", {
          class: Vue.normalizeClass(["ch-input-wrapper", [
            `ch-input--${_ctx.mode}`,
            `ch-input--${state.value}`,
            isFocus.value && "is-focus"
          ]]),
          style: Vue.normalizeStyle(inputStyle.value),
          tabindex: "0"
        }, [
          _ctx.prefixIcon ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_2, [
            Vue.createVNode(Vue.unref(index.ChIcon), { name: _ctx.prefixIcon }, null, 8, ["name"])
          ])) : Vue.createCommentVNode("", true),
          !_ctx.$slots.selectWrapper ? (Vue.openBlock(), Vue.createElementBlock("input", Vue.mergeProps({
            key: 1,
            ref_key: "inputEl",
            ref: inputEl,
            class: "ch-input",
            type: _ctx.type,
            value: _ctx.modelValue,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled
          }, _ctx.$attrs, {
            onFocus: handleFocus,
            onBlur: handleBlur,
            onInput: handleInput
          }), null, 16, _hoisted_3)) : Vue.renderSlot(_ctx.$slots, "selectWrapper", { key: 2 }),
          _ctx.suffixIcon || _ctx.clearable ? (Vue.openBlock(), Vue.createElementBlock("div", {
            key: 3,
            class: "__suffix",
            onClick: handleClearable
          }, [
            Vue.createVNode(Vue.unref(index.ChIcon), {
              name: _ctx.modelValue ? "x-circle" : _ctx.suffixIcon ?? ""
            }, null, 8, ["name"])
          ])) : Vue.createCommentVNode("", true)
        ], 6),
        Vue.createElementVNode("div", _hoisted_4, Vue.toDisplayString(tip.value), 1),
        _ctx.$slots.append ? (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_5, [
          Vue.renderSlot(_ctx.$slots, "append")
        ])) : Vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
