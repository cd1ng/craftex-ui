import { THEME_ID } from "./constants"
import type { ThemeIds } from "./theme"
import { Args, Parameters, StoryContext } from "@storybook/types"



export interface CraftexStoryContext extends StoryContext {
  globals: CraftexGlobals
}
/**
 * Extends the storybook globals object to include fluent specific properties
 */
export interface CraftexGlobals extends Args {
  [THEME_ID]?: ThemeIds
}