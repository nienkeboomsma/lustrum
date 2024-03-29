'use client'

import { hsla } from '@/utils/hsla'
import OriginalDatepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  ${({ theme }) => css`
    .react-datepicker-popper {
      @media (max-width: 25rem) {
        min-width: 18.55rem;
      }
    }

    .react-datepicker-wrapper {
      display: block;
    }

    .react-datepicker * {
      color: ${theme.s950};
    }

    .react-datepicker {
      border-color: ${theme.s500};
      // otherwise the background-colour of time-list-item hides the border
      overflow: hidden;
    }

    .react-datepicker__time-container {
      border-color: ${theme.s500};

      @media (max-width: 25rem) {
        width: 3.4rem;

        & * {
          width: 2.7rem;
        }
      }
    }

    .react-datepicker__header {
      background-color: white;
      border-bottom: none;
    }

    .react-datepicker__navigation {
      &:focus-visible {
        outline: 0;

        .react-datepicker__navigation-icon::before {
          border-radius: 1px;
          outline: ${theme.s600} solid 2px;
          outline-offset: 2.5px;
        }
      }
    }

    .react-datepicker__navigation-icon::before {
      border-color: black;
      top: 0.5rem;
    }

    .react-datepicker__navigation--next--with-time:not(
        .react-datepicker__navigation--next--with-today-button
      ) {
      @media (max-width: 25rem) {
        right: 3.5rem;
      }
    }

    .react-datepicker__current-month {
      color: black !important;
    }

    // weekday abbreviations
    .react-datepicker__day-name {
      color: ${theme.s600};
      font-weight: 700;
      margin-bottom: -1rem;
    }

    .react-datepicker__day {
      &.react-datepicker__day--outside-month {
        color: ${hsla(theme.s600, 0.7)};
      }

      &.react-datepicker__day--today {
        background-color: ${theme.s300};
        border-radius: 4.5px;
      }

      &:focus-visible {
        background-color: white;
        outline: ${theme.s600} solid 2px;
        outline-offset: 2px;
      }

      &.react-datepicker__day--selected {
        background-color: ${theme.s600};
        color: white;
        font-weight: 700;
      }

      &.react-datepicker__day--keyboard-selected {
        background-color: white !important;
      }

      &:hover {
        background-color: ${theme.s200};
        color: ${theme.s950};
      }
    }

    .react-datepicker__header--time {
      display: none;
    }

    .react-datepicker__time-list-item {
      border-radius: 0.3rem;
      height: min-content !important;
      padding: 0.225rem 0 !important;
      margin: 0.4rem 0.3875rem 0.4rem 0.325rem !important;

      &:focus-visible {
        outline: ${theme.s600} solid 2px;
        outline-offset: 2px;
      }

      &.react-datepicker__time-list-item--selected {
        background-color: ${theme.s600} !important;
      }

      &:hover {
        background-color: ${theme.s200} !important;
        color: ${theme.s950} !important;
      }
    }
  `}
`

type DatepickerProps = {
  defaultDate: Date
  onChange: (date: Date) => void
}

export default function Datepicker({ defaultDate, onChange }: DatepickerProps) {
  return (
    <Wrapper>
      <OriginalDatepicker
        dateFormat='d MMMM yyyy HH:mm'
        onChange={onChange}
        selected={defaultDate}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={60}
      />
    </Wrapper>
  )
}
