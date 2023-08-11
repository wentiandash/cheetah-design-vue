const selectProps = {
  modelValue: {
    type: Object,
    default: () => ({})
  },
  options: {
    type: Array,
    default: []
  },
  mode: {
    type: String,
    default: "bordered"
  },
  size: {
    type: String,
    default: "medium"
  },
  infoTip: {
    type: String,
    default: ""
  },
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  multiple: Boolean
};
export {
  selectProps
};
//# sourceMappingURL=select.mjs.map
