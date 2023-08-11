"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
require("../../button/index.js");
const index$1 = require("./index.js");
const index = require("../../button/src/index.js");
const tabPaneProps = Object.assign({
  name: String
}, index.buttonProps);
const TabPane = /* @__PURE__ */ Vue.defineComponent({
  name: "TabPane",
  props: tabPaneProps,
  setup(props, {
    slots
  }) {
    const {
      paneId,
      currentPaneId,
      headers
    } = Vue.inject(index$1.PL_TAB_KEY);
    const id = paneId.value++;
    headers.value.push({
      id,
      ...props
    });
    return () => {
      var _a;
      return Vue.withDirectives(Vue.createVNode("div", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[Vue.vShow, currentPaneId.value === id]]);
    };
  }
});
exports.default = TabPane;
//# sourceMappingURL=pane.js.map
