import { defineComponent, createVNode, Fragment } from "vue";
import { useExpose } from "../../../composables/useExpose.mjs";
import { useStep } from "../../../composables/useStep.mjs";
import { ChButton } from "../../button/index.mjs";
import { ChIcon } from "../../icon/index.mjs";
const stepsProps = {
  modelValue: {
    type: Array,
    require: true
  },
  vertical: Boolean
};
const Steps = /* @__PURE__ */ defineComponent({
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
    } = useStep(props.modelValue, emit);
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
    useExpose({
      current,
      toggle
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": ["ch-steps", props.vertical && "__vertical"]
      }, [(_a = steps.value) == null ? void 0 : _a.map((step, index) => {
        var _a2;
        return createVNode(Fragment, null, [createVNode("div", {
          "class": ["ch-steps-item", props.vertical && "__vertical"]
        }, [createVNode(ChButton, {
          "mode": step.state === "processing" ? "outline" : step.state === "done" ? "solid" : "white",
          "state": step.state === "done" ? step.result === "exception" ? "warning" : step.result === "fail" ? "danger" : "success" : "primary",
          "size": "small",
          "shape": "circle"
        }, {
          default: () => [step.icon ? createVNode(ChIcon, {
            "name": step.icon
          }, null) : index + 1]
        }), createVNode("div", {
          "class": ["ch-steps-content", props.vertical && "__vertical"]
        }, [createVNode("div", {
          "class": "ch-steps-item-name"
        }, [step.name]), createVNode("div", {
          "class": "ch-steps-item-description"
        }, [step.description])])]), index + 1 !== ((_a2 = steps.value) == null ? void 0 : _a2.length) && createVNode("div", {
          "class": ["ch-steps-item-pipe", props.vertical && "__vertical"]
        }, null)]);
      })]);
    };
  }
});
export {
  Steps as default
};
//# sourceMappingURL=index.mjs.map
