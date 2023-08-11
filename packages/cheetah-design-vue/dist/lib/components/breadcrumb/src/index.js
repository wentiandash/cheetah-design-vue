"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const useStep = require("../../../composables/useStep.js");
const index = require("../../button/index.js");
const breadcrumbProps = {
  modelValue: Array,
  replace: Boolean,
  separator: {
    type: String,
    default: "/"
  }
};
const Breadcrumb = /* @__PURE__ */ Vue.defineComponent({
  name: "Breadcrumb",
  props: breadcrumbProps,
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      steps,
      current,
      toggle
    } = useStep.useStep(props.modelValue, emit);
    const instance = Vue.getCurrentInstance();
    const router = instance == null ? void 0 : instance.appContext.config.globalProperties.$router;
    const onClick = (index2, breadcrumb) => {
      return () => {
        toggle(index2);
        if (!breadcrumb.to || !router)
          return;
        props.replace ? router.replace(breadcrumb.to) : router.push(breadcrumb.to);
      };
    };
    return () => {
      var _a;
      return Vue.createVNode(Vue.Fragment, null, [(_a = steps.value) == null ? void 0 : _a.map((step, index$1) => Vue.createVNode(Vue.Fragment, null, [Vue.withDirectives(Vue.createVNode("span", null, [props.separator]), [[Vue.vShow, index$1 !== 0]]), Vue.createVNode(index.ChButton, {
        "size": "mini",
        "mode": "link",
        "iconLeft": step.icon,
        "state": current.value === index$1 ? "primary" : "info",
        "onClick": onClick(index$1, step)
      }, {
        default: () => [step.name]
      })]))]);
    };
  }
});
exports.default = Breadcrumb;
//# sourceMappingURL=index.js.map
