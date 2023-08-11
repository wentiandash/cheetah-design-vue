import { defineComponent, ref, watchEffect, watch, computed, createVNode, withDirectives, vShow, mergeProps } from "vue";
import { ChInput } from "../../input/index.mjs";
import { ChDropdown } from "../../dropdown/index.mjs";
import { useExpose } from "../../../composables/useExpose.mjs";
import { useOutside } from "../../../composables/useOutside.mjs";
import { unrepeatObjectArray } from "../../../utils/index.mjs";
import { ChTag } from "../../tag/index.mjs";
import { selectProps } from "./select.mjs";
const Select = /* @__PURE__ */ defineComponent({
  name: "Select",
  props: selectProps,
  emits: ["update:modelValue"],
  setup(props, {
    slots
  }) {
    const visible = ref(false);
    const inputValue = ref("");
    const selectEl = ref();
    const crrentValue = ref();
    const selectValue = ref([]);
    useExpose({
      selectValue
    });
    const {
      isOutside
    } = useOutside(selectEl, visible);
    watchEffect(() => isOutside.value && (visible.value = false));
    watch(inputValue, (value) => {
      if (!value)
        selectValue.value.length = 0;
    });
    const onSelectClick = () => {
      visible.value = true;
    };
    const onSelectOptionClick = (option) => {
      if (props.multiple) {
        selectValue.value.push(option);
        selectValue.value = unrepeatObjectArray(selectValue.value, "name");
        inputValue.value = selectValue.value.map((option2) => option2.name).join();
      } else {
        selectValue.value = [option];
        inputValue.value = option.name;
      }
    };
    const onTagClose = (index) => {
      return (evt) => {
        evt.stopPropagation();
        selectValue.value.splice(index, 1);
        inputValue.value = selectValue.value.map((option) => option.name).join();
      };
    };
    const resolveProps = ref({
      mode: props.mode,
      size: props.size,
      infoTip: props.infoTip,
      prefixIcon: props.prefixIcon,
      suffixIcon: props.suffixIcon,
      placeholder: props.placeholder,
      disabled: props.disabled,
      clearable: props.clearable
    });
    const resolveSlots = computed(() => {
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
          return createVNode("div", {
            "style": wrapperStyle
          }, [withDirectives(createVNode("div", {
            "style": placeholderStyle
          }, [props.placeholder]), [[vShow, !selectValue.value.length && props.placeholder]]), selectValue.value.map((option, index) => createVNode(ChTag, {
            "mode": "outline",
            "state": "info",
            "closable": true,
            "onClose": onTagClose(index)
          }, {
            default: () => [option.name]
          }))]);
        }
      };
    });
    return () => createVNode(ChDropdown, {
      "trigger": visible.value,
      "data": props.options,
      "modelValue": crrentValue.value,
      "onUpdate:modelValue": ($event) => crrentValue.value = $event,
      "onClick": onSelectOptionClick
    }, {
      reference() {
        return createVNode("div", {
          "ref": selectEl,
          "onClick": onSelectClick
        }, [createVNode(ChInput, mergeProps(resolveProps.value, {
          "modelValue": inputValue.value,
          "onUpdate:modelValue": ($event) => inputValue.value = $event,
          "suffix-icon": "chevron-down"
        }), resolveSlots.value)]);
      }
    });
  }
});
export {
  Select as default
};
//# sourceMappingURL=index.mjs.map
