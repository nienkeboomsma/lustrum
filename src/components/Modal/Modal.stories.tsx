import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import styled from 'styled-components'
import { useArgs } from '@storybook/preview-api'

const meta = {
  component: Modal,
  title: 'Modal/Modal',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const BrightOutlineDiv = styled.div`
  & {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & *:focus {
    outline: red solid 5px;
  }
`

export const FocusTrapping: Story = {
  args: {
    children: (
      <BrightOutlineDiv style={{ width: '200px' }}>
        <input defaultValue='Modal input' />
        <textarea defaultValue='Modal textarea' />
        <button type='button'>Modal button</button>
      </BrightOutlineDiv>
    ),
    closeModal: () => console.log('Close the modal'),
    visible: true,
  },
  decorators: [
    (Story) => {
      const [args, setArgs] = useArgs()

      const openModal = () => {
        setArgs({ visible: true })
      }

      const closeModal = () => {
        setArgs({ visible: false })
      }

      return (
        <>
          <div style={{ position: 'relative', left: '100px' }}>
            <BrightOutlineDiv>
              <button>Some other button</button>
              <button onClick={openModal} type='button'>
                Open modal
              </button>
              <button>Some other button</button>
            </BrightOutlineDiv>
          </div>
          <Story args={{ ...args, closeModal }} />
        </>
      )
    },
  ],
}
