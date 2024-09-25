import React from 'react'
import { CraftexStoryContext, CraftexGlobals, THEME_ID, ThemeIds, themes, } from "../../theme-addon"
import { UIProvider } from "../../../src";
import { defaultTheme } from "../../theme-addon/theme"

const findTheme = (themeId?: ThemeIds) => {
  if (!themeId) return
  return themes.find((value) => value.id === themeId)
}

const getActiveCraftexTheme = (globals: CraftexGlobals) => {
  const selectedThemeId = globals[THEME_ID]
  const { theme } = findTheme(selectedThemeId) ?? defaultTheme
  return { theme }
}

// 添加全局的文档UIProvider配置const findTheme = (themeId?: ThemeIds) => {
export const withCraftexProvider = (
  Story: React.ElementType,
  context: CraftexStoryContext
) => {
  const { globals } = context
  const globalTheme = getActiveCraftexTheme(globals)
  const { theme } = globalTheme
  return (
    <UIProvider theme={theme}>
      <div
        style={{
          padding: "48px 24px",
          backgroundColor: theme.colorNeutralBackground2,
        }}
      >
        <Story />
      </div>
    </UIProvider>
  )
}