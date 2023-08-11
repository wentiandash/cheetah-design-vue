"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Vue = require("vue");
const index = require("../utils/index.js");
function useOutside(target, watcher) {
  const isOutside = Vue.ref(false);
  const listener = (evt) => {
    isOutside.value = false;
    if (target.value)
      isOutside.value = !target.value.contains(evt.target);
  };
  Vue.watchPostEffect(() => {
    if (watcher.value)
      index.runAsync(() => document.addEventListener("click", listener));
    else
      document.removeEventListener("click", listener);
  });
  return {
    isOutside
  };
}
exports.useOutside = useOutside;
//# sourceMappingURL=useOutside.js.map
