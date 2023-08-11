import { createVNode, createTextVNode } from "vue";
import { mount } from "../../../node_modules/.pnpm/@vue_test-utils@2.2.10_vue@3.3.4/node_modules/@vue/test-utils/dist/vue-test-utils.esm-bundler.mjs";
import _sfc_main from "../src/index.vue2.mjs";
import { describe, it } from "../../../node_modules/.pnpm/@vitest_runner@0.28.5/node_modules/@vitest/runner/dist/index.mjs";
describe("Alert.vue", () => {
  it("create", () => {
    mount(() => createVNode(_sfc_main, null, {
      default: () => [createTextVNode("Alert")]
    }));
  });
});
//# sourceMappingURL=alert.test.mjs.map
