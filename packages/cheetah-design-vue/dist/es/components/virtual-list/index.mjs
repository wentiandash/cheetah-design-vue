import { withInstall } from "../../utils/install.mjs";
import VirtualList from "./src/index.mjs";
import VirtualListItem from "./src/item.mjs";
const ChVirtualList = withInstall(VirtualList);
const ChVirtualListItem = withInstall(VirtualListItem);
ChVirtualList.ChVirtualListItem = ChVirtualListItem;
export {
  ChVirtualList,
  ChVirtualListItem,
  ChVirtualList as default
};
//# sourceMappingURL=index.mjs.map
