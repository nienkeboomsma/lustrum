'use client'

import { hsla } from '@/utils/hsla'
import OriginalDatepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  ${({ theme }) => css`
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
    }

    .react-datepicker__header {
      background-color: white;
      border-bottom: none;
    }

    .react-datepicker__navigation-icon::before {
      border-color: black;
      top: 8px;
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

      &.react-datepicker__day--selected {
        background-color: ${theme.s600};
        color: white;
        font-weight: 700;
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
