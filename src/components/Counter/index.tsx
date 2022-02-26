import React, { ChangeEvent } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { ContainerRow, InputWrapper } from '../../styles/globalStyles'
import MainButton from '../Buttons/MainButton'

const CounterContainer = styled(ContainerRow)`
  width: fit-content;
  justify-content: center;
  margin: 12px;
  gap: 0;
`
const CountInput = styled(InputWrapper)<{ border?: string }>`
  text-align: center;
  width: 42px;
  height: 32px;
  border: ${({ border }) => (border ? border : '1px solid var(--secondary)')};
  border-radius: 0;
  box-shadow: 0px 3px 10px var(--secondary-opacity);
  font-weight: 700;
`

interface ICounter {
  count: number
  setCount: (count: number) => void
  isDisablePlusIcon: boolean
  isOver?: boolean
}

const Counter: React.FC<ICounter> = ({ count, setCount, isDisablePlusIcon, isOver }) => {
  const handleChange = () => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const val = Number(e.target.value)
    if (val < 0 || val > 1) return
    setCount(val)
  }

  return (
    <CounterContainer>
      <MainButton
        borderRadius={'8px 0 0 8px'}
        disabled={count === 0}
        color={!isOver ? 'var(--primary-text)' : 'var(--secondary)'}
        backgroundColor={isOver ? 'var(--primary-text)' : 'var(--secondary)'}
        onClick={() => {
          if (count === 0) return
          setCount(count - 1)
        }}
      >
        <FaMinus />
      </MainButton>
      <CountInput
        value={count}
        onChange={handleChange()}
        border={isOver ? '1px solid var(--primary-text)' : '1px solid var(--secondary)'}
      />
      <MainButton
        borderRadius={'0 8px 8px 0'}
        disabled={isDisablePlusIcon}
        color={!isOver ? 'var(--primary-text)' : 'var(--secondary)'}
        backgroundColor={isOver ? 'var(--primary-text)' : 'var(--secondary)'}
        onClick={() => setCount(count + 1)}
      >
        <FaPlus />
      </MainButton>
    </CounterContainer>
  )
}

export default Counter
