const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isNonnegativeNumber = (val) => isNumber(val) && val >= 0;
export {
  isBoolean,
  isNonnegativeNumber,
  isNumber
};
//# sourceMappingURL=is.mjs.map
