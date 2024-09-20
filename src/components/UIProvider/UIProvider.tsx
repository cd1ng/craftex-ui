import React, { createContext } from 'react'
import { Theme, webLightTheme } from 'craftex-ui'
import { useStyles } from './useStyles.styles'

type ThemeContextValue = Theme | Partial<Theme> | undefined

const ThemeContext = createContext<ThemeContextValue>(undefined)

export type UIProviderProps = React.HTMLAttributes<React.ChildContextProvider<ThemeContextValue>> & {
  theme?: ThemeContextValue
}

// 传递theme主题，生效的区域是它的子组件
// 跨组件层级传递参数（theme）
export const UIProvider = ({ className, theme = webLightTheme, children, ...restProps }: UIProviderProps) => {
  const cls = useStyles({ className, theme })
  return (
    <ThemeContext.Provider value={theme} {...restProps}>
      <div className={cls}>{children}</div>
    </ThemeContext.Provider>
  )
}
