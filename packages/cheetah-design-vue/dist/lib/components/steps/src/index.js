"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const useExpose = require("../../../composables/useExpose.js");
const useStep = require("../../../composables/useStep.js");
const index = require("../../button/index.js");
const index$1 = require("../../icon/index.js");
const stepsProps = {
  modelValue: {
    type: Array,
    require: true
  },
  vertical: Boolean
};
const Steps = /* @__PURE__ */ Vue.defineComponent({
  name: "Steps",
  props: stepsProps,
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      steps,
      current,
      toggle: _toggle
    } = useStep.useStep(props.modelValue, emit);
    const toggle = (stepIndex, options) => {
      steps.value[stepIndex] = Object.assign(steps.value[stepIndex], options);
      if (steps.value[stepIndex].state !== "pending") {
        steps.value[stepIndex - 1].state = "done";
        steps.value[stepIndex - 1].result = "success";
      }
      if (steps.value[stepIndex].result === "success" || !steps.value[stepIndex].result)
        steps.value[stepIndex + 1].state = "processing";
      _toggle(stepIndex);
    };
    useExpose.useExpose({
      current,
      toggle
    });
    return () => {
      var _a;
      return Vue.createVNode("div", {
        "class": ["ch-steps", props.vertical && "__vertical"]
      }, [(_a = steps.value) == null ? void 0 : _a.map((step, index$2) => {
        var _a2;
        return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
          "class": ["ch-steps-item", props.vertical && "__vertical"]
        }, [Vue.createVNode(index.ChButton, {
          "mode": step.state === "processing" ? "outline" : step.state === "done" ? "solid" : "white",
          "state": step.state === "done" ? step.result === "exception" ? "warning" : step.result === "fail" ? "danger" : "success" : "primary",
          "size": "small",
          "shape": "circle"
        }, {
          default: () => [step.icon ? Vue.createVNode(index$1.ChIcon, {
            "name": step.icon
          }, null) : index$2 + 1]
        }), Vue.createVNode("div", {
          "class": ["ch-steps-content", props.vertical && "__vertical"]
        }, [Vue.createVNode("div", {
          "class": "ch-steps-item-name"
        }, [step.name]), Vue.createVNode("div", {
          "class": "ch-steps-item-description"
        }, [step.description])])]), index$2 + 1 !== ((_a2 = steps.value) == null ? void 0 : _a2.length) && Vue.createVNode("div", {
          "class": ["ch-steps-item-pipe", props.vertical && "__vertical"]
        }, null)]);
      })]);
    };
  }
});
exports.default = Steps;
//# sourceMappingURL=index.js.map
