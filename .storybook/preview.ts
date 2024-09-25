import { withExportToSandboxButton } from "../docs/sandbox/decorators/withExportToSandboxButton";
import { withCraftexProvider } from "../docs/sandbox/decorators/withCraftexProvider";
import { CraftexDocsPage } from "../docs/src/CraftexDocsPage";
import { THEME_ID } from "../docs/theme-addon";

import type { Preview } from "@storybook/react";

export const decorators = [withCraftexProvider, withExportToSandboxButton];

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    exportToSandbox: {
      bundler: "vite",
      requiredDependencies: {
        react: "^18",
        "react-dom": "^18",
      },
    },
    docs: {
      // 侧边栏目录
      toc: {
        title: "Contents",
      },
      // 指定文档页组件格式
      page: CraftexDocsPage,
      // 不显示方法缩小的操作组件
      canvas: {
        withToolbar: false,
      },
    },
  },
};

export const initialGlobals = { [THEME_ID]: undefined }; // allow theme to be set by URL query param

export default preview;
