import { useEffect } from "@storybook/addons";
import { addDemoActionButton } from "../sandbox-factory";

import type { StoryContext } from "@storybook/types";

export const withExportToSandboxButton = (
  storyFn: (context: StoryContext) => JSX.Element,
  context: StoryContext
) => {
  useEffect(() => {
    // 如果不显示代码，就不显示按钮
    if (context.parameters.docs?.canvas?.sourceState === "none") {
      return;
    }
    if (context.viewMode === "docs") {
      addDemoActionButton(context);
    }
  }, [context]);

  return storyFn(context);
};
