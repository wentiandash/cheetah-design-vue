"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index$2 = require("../../input/index.js");
const index$1 = require("../../dropdown/index.js");
const useExpose = require("../../../composables/useExpose.js");
const useOutside = require("../../../composables/useOutside.js");
const index$3 = require("../../../utils/index.js");
const index = require("../../tag/index.js");
const select = require("./select.js");
const Select = /* @__PURE__ */ Vue.defineComponent({
  name: "Select",
  props: select.selectProps,
  emits: ["update:modelValue"],
  setup(props, {
    slots
  }) {
    const visible = Vue.ref(false);
    const inputValue = Vue.ref("");
    const selectEl = Vue.ref();
    const crrentValue = Vue.ref();
    const selectValue = Vue.ref([]);
    useExpose.useExpose({
      selectValue
    });
    const {
      isOutside
    } = useOutside.useOutside(selectEl, visible);
    Vue.watchEffect(() => isOutside.value && (visible.value = false));
    Vue.watch(inputValue, (value) => {
      if (!value)
        selectValue.value.length = 0;
    });
    const onSelectClick = () => {
      visible.value = true;
    };
    const onSelectOptionClick = (option) => {
      if (props.multiple) {
        selectValue.value.push(option);
        selectValue.value = index$3.unrepeatObjectArray(selectValue.value, "name");
        inputValue.value = selectValue.value.map((option2) => option2.name).join();
      } else {
        selectValue.value = [option];
        inputValue.value = option.name;
      }
    };
    const onTagClose = (index2) => {
      return (evt) => {
        evt.stopPropagation();
        selectValue.value.splice(index2, 1);
        inputValue.value = selectValue.value.map((option) => option.name).join();
      };
    };
    const resolveProps = Vue.ref({
      mode: props.mode,
      size: props.size,
      infoTip: props.infoTip,
      prefixIcon: props.prefixIcon,
      suffixIcon: props.suffixIcon,
      placeholder: props.placeholder,
      disabled: props.disabled,
      clearable: props.clearable
    });
    const resolveSlots = Vue.computed(() => {
      if (!props.multiple)
        return slots;
      const wrapperStyle = {
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "5px 10px",
        gap: "5px",
        width: "100%",
        height: "100%",
        cursor: "pointer"
      };
      const placeholderStyle = {
        color: "var(--ch-input-ph-text-color)"
      };
      return {
        ...slots,
        selectWrapper() {
          return Vue.createVNode("div", {
            "style": wrapperStyle
          }, [Vue.withDirectives(Vue.createVNode("div", {
            "style": placeholderStyle
          }, [props.placeholder]), [[Vue.vShow, !selectValue.value.length && props.placeholder]]), selectValue.value.map((option, index$12) => Vue.createVNode(index.ChTag, {
            "mode": "outline",
            "state": "info",
            "closable": true,
            "onClose": onTagClose(index$12)
          }, {
            default: () => [option.name]
          }))]);
        }
      };
    });
    return () => Vue.createVNode(index$1.ChDropdown, {
      "trigger": visible.value,
      "data": props.options,
      "modelValue": crrentValue.value,
      "onUpdate:modelValue": ($event) => crrentValue.value = $event,
      "onClick": onSelectOptionClick
    }, {
      reference() {
        return Vue.createVNode("div", {
          "ref": selectEl,
          "onClick": onSelectClick
        }, [Vue.createVNode(index$2.ChInput, Vue.mergeProps(resolveProps.value, {
          "modelValue": inputValue.value,
          "onUpdate:modelValue": ($event) => inputValue.value = $event,
          "suffix-icon": "chevron-down"
        }), resolveSlots.value)]);
      }
    });
  }
});
exports.default = Select;
//# sourceMappingURL=index.js.map
