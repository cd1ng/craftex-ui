// @@ts-expect-error - required for ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Input, tokens } from "craftex-ui";
import Default from "./InputDefault.stories";


// ! raw code imports
import DefaultSource from "./InputDefault.stories.tsx?raw";

(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
};


export default {
  title: "组件/Input",
  component: Input,
} as Meta;

export { Default };
