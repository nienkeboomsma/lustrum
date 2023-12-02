import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import theme, { type MonthNumber } from '../src/styles/theme'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'default',
      values: [
        { value: 'hsl(220, 14%, 94%)', name: 'Default' },
        { value: 'hsl(14, 59%, 97%)', name: 'January' },
        { value: 'hsl(39, 32%, 94%)', name: 'February' },
        { value: 'hsl(315, 27%, 94%)', name: 'March' },
        { value: 'hsl(350, 44%, 94%)', name: 'April' },
        { value: 'hsl(55, 53%, 94%)', name: 'May' },
        { value: 'hsl(80, 29%, 94%)', name: 'June' },
        { value: 'hsl(194, 41%, 94%)', name: 'July' },
        { value: 'hsl(222, 23%, 94%)', name: 'August' },
        { value: 'hsl(25, 39%, 93%)', name: 'September' },
        { value: 'hsl(284, 14%, 94%)', name: 'October' },
        { value: 'hsl(151, 24%, 94%)', name: 'November' },
        { value: 'hsl(1, 50%, 94%)', name: 'December' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const month: MonthNumber =
        context.parameters.theme || context.globals.theme
      return (
        <ThemeProvider theme={theme[month]}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      )
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme',
        dynamicTitle: true,
        icon: 'circlehollow',
        items: [
          { value: 'default', title: 'Default' },
          { value: '01', title: 'January' },
          { value: '02', title: 'February' },
          { value: '03', title: 'March' },
          { value: '04', title: 'April' },
          { value: '05', title: 'May' },
          { value: '06', title: 'June' },
          { value: '07', title: 'July' },
          { value: '08', title: 'August' },
          { value: '09', title: 'September' },
          { value: '10', title: 'October' },
          { value: '11', title: 'November' },
          { value: '12', title: 'December' },
        ],
      },
    },
  },
}

export default preview
