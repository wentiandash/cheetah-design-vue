"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("../../utils/install.js");
const index = require("./src/index.js");
const pane = require("./src/pane.js");
const ChTabs = install.withInstall(index.default);
const ChTabPane = install.withInstall(pane.default);
ChTabs.ChTabPane = ChTabPane;
exports.PL_TAB_KEY = index.PL_TAB_KEY;
exports.ChTabPane = ChTabPane;
exports.ChTabs = ChTabs;
exports.default = ChTabs;
//# sourceMappingURL=index.js.map
