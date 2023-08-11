"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const install = require("./install.js");
const is = require("./is.js");
function runAsync(cb) {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    cb();
  }, 0);
}
function uppercaseFirstWord(word) {
  if (!word)
    return word;
  return word.toLowerCase().replace(/[a-z]{1}/, (letter) => letter.toUpperCase());
}
function range(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}
function animation(name, speed = "faster", repeat = 1) {
  return `  animate__animated animate__${name}   animate__${speed}   animate__${repeat === "infinite" ? "infinite" : `__repeat-${repeat}`}`;
}
function unrepeatObjectArray(array, key) {
  const unrepeat = /* @__PURE__ */ new Map();
  for (const item of array)
    unrepeat.set(item[key], item);
  return Array.from(unrepeat.values());
}
exports.withInstall = install.withInstall;
exports.isBoolean = is.isBoolean;
exports.isNonnegativeNumber = is.isNonnegativeNumber;
exports.isNumber = is.isNumber;
exports.animation = animation;
exports.range = range;
exports.runAsync = runAsync;
exports.unrepeatObjectArray = unrepeatObjectArray;
exports.uppercaseFirstWord = uppercaseFirstWord;
//# sourceMappingURL=index.js.map
