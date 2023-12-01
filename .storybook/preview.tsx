import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import theme, { type MonthNumber } from '../src/styles/theme'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
