import { defineComponent, useSlots, ref, computed, watchEffect, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, normalizeStyle, createVNode, unref, mergeProps, toDisplayString } from "vue";
import { ChIcon } from "../../icon/index.mjs";
import { inputProps } from "./input.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Input" },
  __name: "index",
  props: inputProps,
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const verify = ref(false);
    const state = ref("primary");
    const tip = ref(props.infoTip);
    const isFocus = ref(false);
    const inputEl = ref();
    const inputStyle = computed(() => {
      return {
        borderTopLeftRadius: slots.prepend && 0,
        borderBottomLeftRadius: slots.prepend && 0,
        borderTopRightRadius: slots.append && 0,
        borderBottomRightRadius: slots.append && 0
      };
    });
    watchEffect(() => {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["ch-input-container", `ch-input--${_ctx.size}`])
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["ch-input-wrapper", [
            `ch-input--${_ctx.mode}`,
            `ch-input--${state.value}`,
            isFocus.value && "is-focus"
          ]]),
          style: normalizeStyle(inputStyle.value),
          tabindex: "0"
        }, [
          _ctx.prefixIcon ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(unref(ChIcon), { name: _ctx.prefixIcon }, null, 8, ["name"])
          ])) : createCommentVNode("", true),
          !_ctx.$slots.selectWrapper ? (openBlock(), createElementBlock("input", mergeProps({
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
          }), null, 16, _hoisted_3)) : renderSlot(_ctx.$slots, "selectWrapper", { key: 2 }),
          _ctx.suffixIcon || _ctx.clearable ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: "__suffix",
            onClick: handleClearable
          }, [
            createVNode(unref(ChIcon), {
              name: _ctx.modelValue ? "x-circle" : _ctx.suffixIcon ?? ""
            }, null, 8, ["name"])
          ])) : createCommentVNode("", true)
        ], 6),
        createElementVNode("div", _hoisted_4, toDisplayString(tip.value), 1),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "append")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
