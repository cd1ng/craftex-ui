import { Theme} from 'craftex-ui'

export type ThemeContextValue = Theme | Partial<Theme> | undefined

export type UIProviderProps = React.HTMLAttributes<HTMLDivElement> & {
  theme?: ThemeContextValue
}
