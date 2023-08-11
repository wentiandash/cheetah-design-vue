"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Vue = require("vue");
function useExpose(apis) {
  const instance = Vue.getCurrentInstance();
  if (instance)
    Object.assign(instance.proxy, apis);
}
exports.useExpose = useExpose;
//# sourceMappingURL=useExpose.js.map
