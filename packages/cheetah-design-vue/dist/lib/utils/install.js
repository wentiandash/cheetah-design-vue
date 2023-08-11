"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const prefix = "Ch";
function withInstall(comp) {
  comp.install = (app) => {
    app.component(`${prefix}${comp.name}`, comp);
  };
  return comp;
}
exports.withInstall = withInstall;
//# sourceMappingURL=install.js.map
