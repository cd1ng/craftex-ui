import React, { createContext } from 'react'
import { webLightTheme } from 'craftex-ui'
import { useStyles } from './useStyles.styles'

import type { ThemeContextValue,UIProviderProps } from 'craftex-ui'

const ThemeContext = createContext<ThemeContextValue>(undefined)


// 传递theme主题，生效的区域是它的子组件
// 跨组件层级传递参数（theme）
export const UIProvider = ({ className, theme = webLightTheme, children, ...restProps }: UIProviderProps) => {
  const cls = useStyles({ className, theme })
  return (
    <ThemeContext.Provider value={theme}>
      <div {...restProps} className={cls}>{children}</div>
    </ThemeContext.Provider>
  )
}
