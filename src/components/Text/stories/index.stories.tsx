/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from "@storybook/react";
import { Text, handleParameters } from "craftex-ui";
import Default from "./Default.stories";
// ! raw code imports
import DefaultSource from "./Default.stories?raw";

export default {
  title: "组件/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "文本，可以帮助你统一项目中的文本样式。",
      },
      source: {
        language: "tsx",
      },
    },
  },
} as Meta;
const arr1 = [Default];
handleParameters(arr1, [DefaultSource,]);
export {
  Default,
};