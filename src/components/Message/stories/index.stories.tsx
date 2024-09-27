// @@ts-expect-error - required for ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Divider, UIProvider, tokens } from "craftex-ui";
import Default from "./MessageDefault.stories";
import "../index.less"


// ! raw code imports
import DefaultSource from "./MessageDefault.stories.tsx?raw";


(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};


export default {
  title: "组件/Message",
} as Meta;

export { Default };
