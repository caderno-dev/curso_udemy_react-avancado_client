import { StoryFn, Meta } from '@storybook/react'
import ExploreSideBar, { ExploreSideBarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<ExploreSideBarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar {...args} />
  </div>
)

export const WithInitialValues: StoryFn<ExploreSideBarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
