import { StoryFn, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: StoryFn = (args) => <Main {...args} />
Basic.args = {
  title: 'Título básico'
}

export const Default: StoryFn = (args) => <Main {...args} />
