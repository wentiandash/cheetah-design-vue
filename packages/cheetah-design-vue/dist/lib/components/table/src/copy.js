"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Vue = require("vue");
const index = require("./index.js");
let cellData = "";
let columnKey = "";
let rowData = {};
const columnData = [];
const copyRow = () => {
  Reflect.deleteProperty(rowData, "children");
  copy(
    Object.values(rowData).filter((_, index$1) => index$1 < index.config.value.columns.length).join(" ")
  );
};
const copyColumn = () => {
  columnData.length = 0;
  getColumnData(index.config.value.data);
  copy(columnData.join("\n"));
  function getColumnData(data) {
    data.forEach((row) => {
      columnData.push(row[columnKey]);
      if (row.children)
        getColumnData(row.children);
    });
  }
};
const copyCell = () => {
  copy(cellData);
};
const handelCopy = (row, key, cell) => {
  rowData = Vue.toRaw(row);
  cellData = cell;
  columnKey = key;
};
function copy(source) {
  if (navigator && "clipboard" in navigator) {
    navigator.clipboard.writeText(source);
  } else {
    const ta = document.createElement("textarea");
    ta.value = source ?? "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}
exports.copyCell = copyCell;
exports.copyColumn = copyColumn;
exports.copyRow = copyRow;
exports.handelCopy = handelCopy;
//# sourceMappingURL=copy.js.map
