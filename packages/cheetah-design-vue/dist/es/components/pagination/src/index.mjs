import { defineComponent, computed, ref, watchEffect, withDirectives, createVNode, createTextVNode, vShow, isVNode } from "vue";
import { useExpose } from "../../../composables/useExpose.mjs";
import { range } from "../../../utils/index.mjs";
import { useCount } from "../../../composables/useCount.mjs";
import { ChButton } from "../../button/index.mjs";
import { ChInput } from "../../input/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
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
const Pagination = /* @__PURE__ */ defineComponent({
  name: "Pagination",
  props: paginationProps,
  setup(props) {
    const count = computed(() => range(2, props.count - 1, 1));
    const max = computed(() => count.value.length + 2);
    const {
      count: current,
      add: next,
      sub: prev,
      update: toggle
    } = useCount({
      initial: 1,
      min: 1,
      max
    });
    useExpose({
      current,
      next,
      prev,
      toggle
    });
    const start = ref(0);
    const end = ref(props.showCount - 3);
    const isShowLeftFold = computed(() => current.value * 2 - 1 > props.showCount);
    const isShowRightFold = computed(() => (props.count - current.value) * 2 - 1 >= props.showCount);
    const onPrev = () => prev();
    const onNext = () => next();
    const onStepPrev = () => prev(end.value - start.value - 1);
    const onStepNext = () => next(end.value - start.value);
    const onPageNo = (no) => () => current.value = no;
    const onToggle = (evt) => {
      toggle(parseInt(evt.target.value));
    };
    watchEffect(() => {
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
      return withDirectives(createVNode("div", {
        "class": "ch-pagination"
      }, [createVNode(ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "chevron-left",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onPrev
      }, null), createVNode(ChButton, {
        "size": "mini",
        "mode": props.mode,
        "shape": props.shape,
        "state": current.value === 1 ? "primary" : "info",
        "onClick": onPageNo(1)
      }, {
        default: () => [createTextVNode("1")]
      }), withDirectives(createVNode(ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "three-dots",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onStepPrev
      }, null), [[vShow, isShowLeftFold.value]]), (_a = count.value) == null ? void 0 : _a.slice(start.value, end.value).map((pageNo) => createVNode(ChButton, {
        "size": "mini",
        "mode": props.mode,
        "shape": props.shape,
        "state": current.value === pageNo ? "primary" : "info",
        "onClick": onPageNo(pageNo)
      }, _isSlot(pageNo) ? pageNo : {
        default: () => [pageNo]
      })), withDirectives(createVNode(ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "three-dots",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onStepNext
      }, null), [[vShow, isShowRightFold.value]]), createVNode(ChButton, {
        "size": "mini",
        "mode": props.mode,
        "shape": props.shape,
        "state": current.value === props.count ? "primary" : "info",
        "onClick": onPageNo(props.count)
      }, {
        default: () => [props.count]
      }), createVNode(ChButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "chevron-right",
        "mode": props.mode,
        "shape": props.shape,
        "onClick": onNext
      }, null), createTextVNode("to "), createVNode(ChInput, {
        "style": "width: 56px",
        "type": "number",
        "size": "small",
        "onBlur": onToggle
      }, null)]), [[vShow, props.count > 1]]);
    };
  }
});
export {
  Pagination as default
};
//# sourceMappingURL=index.mjs.map
