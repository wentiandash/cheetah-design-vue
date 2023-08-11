"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const useExpose = require("../../../composables/useExpose.js");
const index = require("../../../utils/index.js");
const useCount = require("../../../composables/useCount.js");
const index$1 = require("../../button/index.js");
const index$2 = require("../../input/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
const paginationProps = {
  count: {
    type: Number,
    default: 0
  },
  showCount: {
    type: Number,
    default: 7
  },
  mode: {
    type: String,
    default: "ghost"
  },
  shape: {
    type: String,
    default: "rounded"
  }
};
const Pagination = /* @__PURE__ */ Vue.defineComponent({
  name: "Pagination",
  props: paginationProps,
  setup(props) {
    const count = Vue.computed(() => index.range(2, props.count - 1, 1));
    const max = Vue.computed(() => count.value.length + 2);
    const {
      count: current,
      add: next,
      sub: prev,
      update: toggle
    } = useCount.useCount({
      initial: 1,
      min: 1,
      max
    });
    useExpose.useExpose({
      current,
      next,
      prev,
      toggle
    });
    const start = Vue.ref(0);
    const end = Vue.ref(props.showCount - 3);
    const isShowLeftFold = Vue.computed(() => current.value * 2 - 1 > props.showCount);
    const isShowRightFold = Vue.computed(() => (props.count - current.value) * 2 - 1 >= props.showCount);
    const onPrev = () => prev();
    const onNext = () => next();
    const onStepPrev = () => prev(end.value - start.value - 1);
    const onStepNext = () => next(end.value - start.value);
    const onPageNo = (no) => () => current.value = no;
    const onToggle = (evt) => {
      toggle(parseInt(evt.target.value));
    };
    Vue.watchEffect(() => {
      if (isShowLeftFold.value && isShowRightFold.value) {
        const currentIndex = count.value.findIndex((value) => value === current.value);
        const float = (props.showCount - 3) / 2;
        start.value = currentIndex - float;
        end.value = currentIndex + float + 1;
      } else if (isShowLeftFold.value) {
        start.value = count.value.length - props.showCount + 1;
        end.value = count.value.length;
      } else if (isShowRightFold.value) {
        start.value = 0;
        end.value = props.showCount - 2;
      }
    });
    return () => {
      var _a;
      return Vue.withDirectives(Vue.createVNode("div", {
        "class": "ch-pagination"
      }, [Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "chevron-left",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onPrev
      }, null), Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "mode": props.mode,
        "shape": props.shape,
        "state": current.value === 1 ? "primary" : "info",
        "onClick": onPageNo(1)
      }, {
        default: () => [Vue.createTextVNode("1")]
      }), Vue.withDirectives(Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "three-dots",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onStepPrev
      }, null), [[Vue.vShow, isShowLeftFold.value]]), (_a = count.value) == null ? void 0 : _a.slice(start.value, end.value).map((pageNo) => Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "mode": props.mode,
        "shape": props.shape,
        "state": current.value === pageNo ? "primary" : "info",
        "onClick": onPageNo(pageNo)
      }, _isSlot(pageNo) ? pageNo : {
        default: () => [pageNo]
      })), Vue.withDirectives(Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "three-dots",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onStepNext
      }, null), [[Vue.vShow, isShowRightFold.value]]), Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "mode": props.mode,
        "shape": props.shape,
        "state": current.value === props.count ? "primary" : "info",
        "onClick": onPageNo(props.count)
      }, {
        default: () => [props.count]
      }), Vue.createVNode(index$1.ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "chevron-right",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onNext
      }, null), Vue.createTextVNode("to "), Vue.createVNode(index$2.ChInput, {
        "style": "width: 56px",
        "type": "number",
        "size": "small",
        "onBlur": onToggle
      }, null)]), [[Vue.vShow, props.count > 1]]);
    };
  }
});
exports.default = Pagination;
//# sourceMappingURL=index.js.map
