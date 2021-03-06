import React from 'react'
import styled from 'styled-components/macro'
import { ExternalLink } from '../../styles/components'

const InfoCard = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#40444f50' : '#0f0f0f')};
  padding: 1rem;
  outline: none;
  border: 1px solid;
  border-radius: 12px;
  width: 100% !important;
  // &:focus {
  //   box-shadow: 0 0 0 1px var(--secondary);
  // }
`

const OptionCard = styled(InfoCard as any)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
`

const OptionCardLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
`

const OptionCardClickable = styled(OptionCard as any)<{ clickable?: boolean }>`
  margin-top: 0;
  &:hover {
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
    border: ${({ clickable }) => (clickable ? `1px solid var(--secondary)` : ``)};
  }
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`

const GreenCircle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:first-child {
    height: 8px;
    width: 8px;
    margin-right: 8px;
    background-color: #27ae60;
    border-radius: 50%;
  }
`

const CircleWrapper = styled.div`
  color: #27ae60;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: ${(props) => (props.color === 'blue' ? 'var(--secondary)' : '#FFFFFF')};
  font-size: 1rem;
  font-weight: 500;
`

const SubHeader = styled.div`
  color: #8f96ac;
  margin-top: 10px;
  font-size: 12px;
`

const IconWrapper = styled.div<{ size?: number | null }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '24px')};
    width: ${({ size }) => (size ? size + 'px' : '24px')};
  }
`

export default function Option({
  link = null,
  size,
  onClick = null,
  color,
  header,
  subheader = null,
  icon,
  active = false,
  id,
}: {
  link?: string | null
  clickable?: boolean
  size?: number | null
  onClick?: null | (() => void)
  color: string
  header: React.ReactNode
  subheader: React.ReactNode | null
  icon: string
  active?: boolean
  id: string
}) {
  const content = (
    <OptionCardClickable id={id} onClick={onClick} clickable={!active} active={active}>
      <OptionCardLeft>
        <HeaderText color={color}>
          {active ? (
            <CircleWrapper>
              <GreenCircle>
                <div />
              </GreenCircle>
            </CircleWrapper>
          ) : (
            ''
          )}
          {header}
        </HeaderText>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </OptionCardLeft>
      <IconWrapper size={size}>
        <img src={icon} alt={'Icon'} />
      </IconWrapper>
    </OptionCardClickable>
  )
  if (link) {
    return <ExternalLink href={link}>{content}</ExternalLink>
  }

  return content
}
