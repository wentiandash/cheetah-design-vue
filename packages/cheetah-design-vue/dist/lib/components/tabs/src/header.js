"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Vue = require("vue");
const index$1 = require("../../button/index.js");
const index = require("./index.js");
const Header = /* @__PURE__ */ Vue.defineComponent({
  setup() {
    const {
      currentPaneId,
      headers,
      placement
    } = Vue.inject(index.PL_TAB_KEY);
    const btnsWrpper = Vue.ref();
    const btns = Vue.ref();
    const thumbStyle = Vue.computed(() => {
      if (!btns.value)
        return;
      if (placement.value === "top") {
        const width = `${btns.value[currentPaneId.value].clientWidth}px`;
        const transform2 = `translateX(${btns.value[currentPaneId.value].offsetLeft}px)`;
        return {
          width,
          transform: transform2
        };
      }
      const height = `${btns.value[currentPaneId.value].clientHeight}px`;
      const transform = `translateY(${btns.value[currentPaneId.value].offsetTop}px)`;
      return {
        height,
        transform
      };
    });
    Vue.onMounted(() => {
      Vue.nextTick(() => {
        btns.value = Array.from(btnsWrpper.value.children);
      });
    });
    const onClick = (id) => {
      return () => currentPaneId.value = id;
    };
    const renderHeaderButton = (hd) => Vue.createVNode(index$1.ChButton, Vue.mergeProps(hd, {
      "mode": "link",
      "state": currentPaneId.value === hd.id ? "primary" : "info",
      "onClick": onClick(hd.id)
    }), {
      default: () => [hd.name]
    });
    return () => Vue.createVNode("div", {
      "class": ["ch-tabs-header", placement.value]
    }, [Vue.createVNode("div", {
      "ref": btnsWrpper,
      "class": ["ch-tabs-button", placement.value]
    }, [headers.value.map((hd) => renderHeaderButton(hd))]), Vue.createVNode("div", {
      "class": ["ch-tabs-slideway", placement.value]
    }, [Vue.createVNode("div", {
      "class": "ch-tabs-thumb",
      "style": thumbStyle.value
    }, null)])]);
  }
});
exports.default = Header;
//# sourceMappingURL=header.js.map
