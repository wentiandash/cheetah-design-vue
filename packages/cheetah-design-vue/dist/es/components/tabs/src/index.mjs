import { defineComponent, ref, provide, computed, createVNode } from "vue";
import Header from "./header.mjs";
const PL_TAB_KEY = Symbol("ch-tabs");
const tabsProps = {
  defaultTab: String,
  placement: String
};
const Tabs = /* @__PURE__ */ defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, {
    slots
  }) {
    var _a;
    const paneId = ref(0);
    const currentPaneId = ref(0);
    const headers = ref([]);
    if (!((_a = slots.default) == null ? void 0 : _a.call(slots)))
      console.log("Warn: Tabs missing default slot.");
    provide(PL_TAB_KEY, {
      headers,
      paneId,
      currentPaneId,
      placement: computed(() => props.placement || "top")
    });
    return () => {
      var _a2;
      return createVNode("div", {
        "class": ["ch-tabs", `${props.placement}`]
      }, [createVNode(Header, null, null), (_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
    };
  }
});
export {
  PL_TAB_KEY,
  Tabs as default
};
//# sourceMappingURL=index.mjs.map
