"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const VirtualListItem = /* @__PURE__ */ Vue.defineComponent({
  name: "VirtualListItem",
  setup(_, {
    slots
  }) {
    return () => {
      var _a;
      return Vue.createVNode("div", {
        "class": "ch-virtual-list-item"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
exports.default = VirtualListItem;
//# sourceMappingURL=item.js.map
