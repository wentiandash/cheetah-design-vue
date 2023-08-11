import { withInstall } from "../../utils/install.mjs";
import Tabs from "./src/index.mjs";
import { PL_TAB_KEY } from "./src/index.mjs";
import TabPane from "./src/pane.mjs";
const ChTabs = withInstall(Tabs);
const ChTabPane = withInstall(TabPane);
ChTabs.ChTabPane = ChTabPane;
export {
  ChTabPane,
  ChTabs,
  PL_TAB_KEY,
  ChTabs as default
};
//# sourceMappingURL=index.mjs.map
