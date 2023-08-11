const inputProps = {
  modelValue: {
    type: [String, Number],
    default: ""
  },
  mode: {
    type: String,
    default: "bordered"
  },
  type: {
    type: String,
    default: "text"
  },
  size: {
    type: String,
    default: "medium"
  },
  errorTip: String,
  successTip: String,
  infoTip: String,
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  pattern: RegExp
};
export {
  inputProps
};
//# sourceMappingURL=input.mjs.map
