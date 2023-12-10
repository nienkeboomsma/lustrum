import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components'

enum Intent {
  Primary = 'primary',
  Secondary = 'secondary',
}

enum Shape {
  Rectangle = 'rectangle',
  Lozenge = 'lozenge',
}

enum Size {
  Medium = 'medium',
  Large = 'large',
}

interface StyleTypes {
  $intent: Intent
  $shadow: boolean
  $shape: Shape
  $size: Size
}

const getIntentStyles = ({
  theme,
  $intent,
}: {
  theme: DefaultTheme
  $intent: Intent
}) => {
  switch ($intent) {
    case Intent.Primary:
      return {
        default: {
          backgroundColor: theme.s500,
          borderColor: theme.s500,
          color: theme.s50,
        },
        hover: {
          backgroundColor: theme.s400,
          borderColor: theme.s400,
          color: theme.s50,
        },
      }
    case Intent.Secondary:
      return {
        default: {
          backgroundColor: 'white',
          borderColor: theme.s500,
          color: theme.s500,
        },
        hover: {
          backgroundColor: theme.s50,
          borderColor: theme.s500,
          color: theme.s500,
        },
      }
  }
}

const getBoxShadow = (
  {
    theme,
    $shadow,
  }: {
    theme: DefaultTheme
    $shadow: boolean
  },
  active: boolean
) => {
  if (!$shadow) return

  const defaultShadow = `0 16px 20px -4px ${theme.s200},
  0 6px 8px -5px ${theme.s200};`
  const activeShadow = `0 10px 15px -3px ${theme.s200},
  0 4px 6px -4px ${theme.s200}`

  return active ? activeShadow : defaultShadow
}

const getBorderRadius = ({ $shape }: { $shape: Shape }) => {
  switch ($shape) {
    case Shape.Rectangle:
      return '0.25rem'
    case Shape.Lozenge:
      return '1.5rem'
  }
}

const getSizeStyles = ({ $size }: { $size: Size }) => {
  switch ($size) {
    case Size.Medium:
      return {
        fontSize: '0.75rem',
        letterSpacing: '0.0875rem',
        padding: '0.375rem 0.5rem',
      }
    case Size.Large:
      return {
        fontSize: '0.875rem',
        letterSpacing: '0.0625rem',
        padding: '0.5rem 0.75rem',
      }
  }
}

const StyledButton = styled.button<StyleTypes>`
  ${(props) => css`
    background-color: ${getIntentStyles(props).default.backgroundColor};
    border-color: ${getIntentStyles(props).default.borderColor};
    border-radius: ${getBorderRadius(props)};
    border-style: solid;
    border-width: 1px;
    box-shadow: ${getBoxShadow(props, false)};
    color: ${getIntentStyles(props).default.color};
    font-family: inherit;
    font-size: ${getSizeStyles(props).fontSize};
    font-weight: 300;
    letter-spacing: ${getSizeStyles(props).letterSpacing};
    outline-offset: 3px;
    padding: ${getSizeStyles(props).padding};
    text-align: center;
    text-transform: uppercase;
    user-select: none;

    &:active {
      box-shadow: ${getBoxShadow(props, false)};
      transform: translateY(1px);
      transition: transform cubic-bezier(0.4, 0, 0.2, 1) 150ms;
    }

    &:hover {
      background-color: ${getIntentStyles(props).hover.backgroundColor};
      border-color: ${getIntentStyles(props).hover.borderColor};
      color: ${getIntentStyles(props).hover.color};
      cursor: pointer;
    }
  `}
`

export default function Button({
  children,
  intent,
  shadow,
  shape,
  size,
}: {
  children: React.ReactNode
  intent: Intent
  shadow: boolean
  shape: Shape
  size: Size
}) {
  return (
    <StyledButton $intent={intent} $shape={shape} $shadow={shadow} $size={size}>
      {children}
    </StyledButton>
  )
}

Button.Intent = Intent
Button.Shape = Shape
Button.Size = Size
