import React from 'react'
import { UIProvider} from "../../../src";
import { webLightTheme } from '../../../src/tokens/themes/web/lightTheme';

// 添加全局的文档UIProvider配置
export const withFinshProvider = (Story) => {
  const theme = webLightTheme
  return <UIProvider>
    <div
      style={{
        padding: "48px 24px",
        backgroundColor: theme.colorNeutralBackground2,
      }}
    >
      <Story />
    </div>
  </UIProvider>
}