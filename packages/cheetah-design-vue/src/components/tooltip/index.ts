import { withInstall } from '../../utils'
import Tooltip from './src/index'

export const ChTooltip: typeof Tooltip = withInstall(Tooltip)
export default ChTooltip
export * from './src/index'
