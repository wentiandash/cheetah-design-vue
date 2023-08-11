"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isNonnegativeNumber = (val) => isNumber(val) && val >= 0;
exports.isBoolean = isBoolean;
exports.isNonnegativeNumber = isNonnegativeNumber;
exports.isNumber = isNumber;
//# sourceMappingURL=is.js.map
