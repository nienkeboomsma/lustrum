import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/GlobalStyles'
import themes, { type MonthNumber } from '../src/styles/theme'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'Default',
      values: [
        { value: 'hsl(0, 0%, 100%)', name: 'White' },
        { value: themes.default.s50, name: 'Default' },
        { value: themes['01'].s50, name: 'January' },
        { value: themes['02'].s50, name: 'February' },
        { value: themes['03'].s50, name: 'March' },
        { value: themes['04'].s50, name: 'April' },
        { value: themes['05'].s50, name: 'May' },
        { value: themes['06'].s50, name: 'June' },
        { value: themes['07'].s50, name: 'July' },
        { value: themes['08'].s50, name: 'August' },
        { value: themes['09'].s50, name: 'September' },
        { value: themes['10'].s50, name: 'October' },
        { value: themes['11'].s50, name: 'November' },
        { value: themes['12'].s50, name: 'December' },
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
        <ThemeProvider theme={themes[month]}>
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
