import { withInstall } from '../../utils'
import Tabs from './src/index'
import TabPane from './src/pane'

export const ChTabs = withInstall(Tabs)
export const ChTabPane = withInstall(TabPane)
ChTabs.ChTabPane = ChTabPane

export default ChTabs
export * from './src/index'
export * from './src/pane'
