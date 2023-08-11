import { withInstall } from '../../utils'
import VirtualList from './src/index'
import VirtualListItem from './src/item'

export const ChVirtualList = withInstall(VirtualList)
export const ChVirtualListItem = withInstall(VirtualListItem)
ChVirtualList.ChVirtualListItem = ChVirtualListItem

export default ChVirtualList
export * from './src/index'
