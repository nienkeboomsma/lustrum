'use client'

import OriginalDatepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  .react-datepicker * {
    color: ${({ theme }) => theme.s950};
  }

  .react-datepicker {
    border-color: ${({ theme }) => theme.s500};
    // otherwise the background-colour of time-list-item hides the border
    overflow: hidden;
  }

  .react-datepicker__time-container {
    border-color: ${({ theme }) => theme.s500};
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
    color: ${({ theme }) => theme.s600};
    font-weight: 700;
    margin-bottom: -1rem;
  }

  .react-datepicker__day {
    &.react-datepicker__day--outside-month {
      color: #bbb;
    }

    &.react-datepicker__day--today {
      background-color: ${({ theme }) => theme.s300};
      border-radius: 4.5px;
    }

    &.react-datepicker__day--selected {
      background-color: ${({ theme }) => theme.s600};
      color: white;
      font-weight: 700;
    }

    &:hover {
      background-color: ${({ theme }) => theme.s200};
      color: ${({ theme }) => theme.s950};
    }
  }

  .react-datepicker__header--time {
    display: none;
  }

  .react-datepicker__time-list-item {
    &.react-datepicker__time-list-item--selected {
      background-color: ${({ theme }) => theme.s600} !important;
    }

    &:hover {
      background-color: ${({ theme }) => theme.s200} !important;
      color: ${({ theme }) => theme.s950} !important;
    }
  }
`

export default function Datepicker({
  date,
  onChange,
  ...props
}: {
  date: Date
  onChange: (date: Date) => void
}) {
  return (
    <Wrapper>
      <OriginalDatepicker
        id='date'
        selected={date}
        onChange={onChange}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={60}
        dateFormat='d MMMM yyyy HH:mm'
        {...props}
      />
    </Wrapper>
  )
}
