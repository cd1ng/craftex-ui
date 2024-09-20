import type { Meta } from '@storybook/react'
import { UIProvider } from 'craftex-ui'
import Default from './Default.stories'
import DefaultSource from './Default.stories?raw'
import Nested from './Nested.stories'
import NestedSource from './Nested.stories?raw'

const meta = {
  title: '组件/UIProvider',
  component: UIProvider,
} satisfies Meta<typeof UIProvider>

export default meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(Nested as any).parameters = {
  docs: {
    description: {
      story: 'UIProvider可以嵌套使用。',
    },
    source: {
      code: NestedSource,
    },
  },
}

export { Default, Nested }
