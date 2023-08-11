"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Vue = require("vue");
const is = require("../utils/is.js");
function useCount(options = {}) {
  const {
    min = -Infinity,
    max = Infinity,
    initial = 0
  } = options;
  const count = Vue.ref(initial);
  const add = (step = 1) => {
    if (is.isNumber(Vue.toValue(max)) && count.value < Vue.toValue(max)) {
      if (count.value + step > Vue.toValue(max))
        return count.value = Vue.toValue(max);
      count.value += step;
    }
  };
  const sub = (step = 1) => {
    if (is.isNumber(Vue.toValue(min)) && count.value > Vue.toValue(min)) {
      if (count.value - step < Vue.toValue(min))
        return count.value = Vue.toValue(min);
      count.value -= step;
    }
  };
  const update = (value) => {
    if (value >= Vue.toValue(min) && value <= Vue.toValue(max))
      count.value = value;
  };
  return {
    count,
    add,
    sub,
    update
  };
}
exports.useCount = useCount;
//# sourceMappingURL=useCount.js.map
