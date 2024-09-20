import { useExportToSandboxButton } from "../docs/sandbox/decorators/with-export-to-sandbox-button";

import type { Preview } from "@storybook/react";

export const decorators = [useExportToSandboxButton];

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
  },
};

export default preview;
