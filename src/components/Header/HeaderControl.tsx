import styled from 'styled-components'

export default function HeaderControl({
  children,
}: {
  children: React.ReactNode
}) {
  const Wrapper = styled.div`
    height: 2rem;
    width: 2rem;

    & > a,
    & > button {
      all: unset;
      cursor: pointer;
      display: inline-block;
      height: 2rem;
      width: 2rem;

      &:active {
        transform: translateY(1px);
        transition: transform cubic-bezier(0.4, 0, 0.2, 1) 150ms;
      }

      &:focus-visible {
        border-radius: 0.25rem;
        outline: ${({ theme }) => theme.s50} solid 2px;
      }

      &:hover {
        color: ${({ theme }) => theme.s200};
      }

      & > svg {
        height: 2rem;
        width: 2rem;
      }
    }
  `

  return <Wrapper>{children}</Wrapper>
}
