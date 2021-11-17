import React from 'react'
import PIN_ICON from '../../assets/images/pin-icon.svg'
import { MainButton } from '../../components/Buttons/MainButton'
import Checkbox from '../../components/Checkbox'
import { BoxCardWithoutBorder, ContainerRow, ImageContainer, TextCustom } from '../../styles/globalStyles'

interface IRankItem {
  creator: string
  rank: string
  points: number
  checked: boolean
  checkItem: () => void
}

export const RankItem: React.FC<IRankItem> = ({ creator, rank, points, checked, checkItem }) => {
  return (
    <ContainerRow
      justifyContent={'space-between'}
      padding={'10px'}
      backgroundColor={'var(--light-navy-blue)'}
      margin={'5px 0'}
      width={'100%'}
    >
      <BoxCardWithoutBorder boxWidth={'5%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <Checkbox checked={checked} onChange={checkItem} />
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'22%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {creator}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'22%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {rank}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'22%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <TextCustom color={'var(--primary-text)'} textAlign={'left'} fontSize={'16px'} fontWeight={300}>
          {points}
        </TextCustom>
      </BoxCardWithoutBorder>
      <BoxCardWithoutBorder boxWidth={'29%'} justifyContent={'flex-start'} padding={'2px'} margin={'0'}>
        <MainButton
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'10px 10px'}
          backgroundColor={'var(--secondary)'}
          margin={'0'}
        >
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            view Collections &nbsp;
          </TextCustom>
          <ImageContainer src={PIN_ICON} width={'20px'} />
        </MainButton>
      </BoxCardWithoutBorder>
    </ContainerRow>
  )
}
