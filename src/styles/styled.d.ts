import 'styled-components'
import { type Themes } from './theme'

declare module 'styled-components' {
  export type DefaultTheme = Themes
}
