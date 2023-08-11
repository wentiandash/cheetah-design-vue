"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const header = require("./header.js");
const PL_TAB_KEY = Symbol("ch-tabs");
const tabsProps = {
  defaultTab: String,
  placement: String
};
const Tabs = /* @__PURE__ */ Vue.defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, {
    slots
  }) {
    var _a;
    const paneId = Vue.ref(0);
    const currentPaneId = Vue.ref(0);
    const headers = Vue.ref([]);
    if (!((_a = slots.default) == null ? void 0 : _a.call(slots)))
      console.log("Warn: Tabs missing default slot.");
    Vue.provide(PL_TAB_KEY, {
      headers,
      paneId,
      currentPaneId,
      placement: Vue.computed(() => props.placement || "top")
    });
    return () => {
      var _a2;
      return Vue.createVNode("div", {
        "class": ["ch-tabs", `${props.placement}`]
      }, [Vue.createVNode(header.default, null, null), (_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
    };
  }
});
exports.PL_TAB_KEY = PL_TAB_KEY;
exports.default = Tabs;
//# sourceMappingURL=index.js.map
