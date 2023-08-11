"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.selectProps = selectProps;
//# sourceMappingURL=select.js.map
