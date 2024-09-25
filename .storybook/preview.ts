import { withExportToSandboxButton } from "../docs/sandbox/decorators/withExportToSandboxButton";
import { withFinshProvider } from "../docs/sandbox/decorators/withFinshProvider";

import type { Preview } from "@storybook/react";
import { CraftexDocsPage } from "../docs/src/CraftexDocsPage";

export const decorators = [withFinshProvider,withExportToSandboxButton];

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

export default preview;
