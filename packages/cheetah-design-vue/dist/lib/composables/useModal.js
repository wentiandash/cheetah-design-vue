"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Vue = require("vue");
const useToggle = require("./useToggle.js");
const useExpose = require("./useExpose.js");
const useOutside = require("./useOutside.js");
function useModal(emit) {
  const modal = Vue.ref();
  const toggle = useToggle.useToggle();
  const { isOutside } = useOutside.useOutside(modal, toggle.state);
  Vue.watch(toggle.state, (value) => emit(value ? "open" : "close"));
  Vue.watchEffect(() => isOutside.value && (toggle.state.value = false));
  useExpose.useExpose(toggle);
  return {
    modal: Object.assign(modal, toggle)
  };
}
exports.useModal = useModal;
//# sourceMappingURL=useModal.js.map
