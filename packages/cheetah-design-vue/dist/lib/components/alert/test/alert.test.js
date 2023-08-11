"use strict";
const Vue = require("vue");
const vueTestUtils_esmBundler = require("../../../node_modules/.pnpm/@vue_test-utils@2.2.10_vue@3.3.4/node_modules/@vue/test-utils/dist/vue-test-utils.esm-bundler.js");
const index_vue_vue_type_script_setup_true_lang = require("../src/index.vue2.js");
const index = require("../../../node_modules/.pnpm/@vitest_runner@0.28.5/node_modules/@vitest/runner/dist/index.js");
index.describe("Alert.vue", () => {
  index.it("create", () => {
    vueTestUtils_esmBundler.mount(() => Vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, null, {
      default: () => [Vue.createTextVNode("Alert")]
    }));
  });
});
//# sourceMappingURL=alert.test.js.map
