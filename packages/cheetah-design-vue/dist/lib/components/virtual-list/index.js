"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("../../utils/install.js");
const index = require("./src/index.js");
const item = require("./src/item.js");
const ChVirtualList = install.withInstall(index.default);
const ChVirtualListItem = install.withInstall(item.default);
ChVirtualList.ChVirtualListItem = ChVirtualListItem;
exports.ChVirtualList = ChVirtualList;
exports.ChVirtualListItem = ChVirtualListItem;
exports.default = ChVirtualList;
//# sourceMappingURL=index.js.map
