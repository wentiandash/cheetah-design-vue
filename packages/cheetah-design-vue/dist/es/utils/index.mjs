import { withInstall } from "./install.mjs";
import { isBoolean, isNonnegativeNumber, isNumber } from "./is.mjs";
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
export {
  animation,
  isBoolean,
  isNonnegativeNumber,
  isNumber,
  range,
  runAsync,
  unrepeatObjectArray,
  uppercaseFirstWord,
  withInstall
};
//# sourceMappingURL=index.mjs.map
