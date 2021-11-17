import React from 'react'
import { isMobile } from 'react-device-detect'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import { ComponentWrapper, ContainerRow, SubText, TextCustom } from '../../styles/globalStyles'
import { PackListBox } from './PackListBox'

export const PackList: React.FC = () => {
  return (
    <ContainerRow backgroundColor={'var(--dark-navy)'} justifyContent={'center'}>
      <ComponentWrapper margin={isMobile ? '0' : '60px 0'} padding={'24px'}>
        <ContainerRow justifyContent={'center'} padding={'32px'} margin={'0 0 50px 0'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '2rem' : '3rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            The &nbsp;
          </TextCustom>
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            Packs
          </SubText>
        </ContainerRow>
        <PackListBox />
      </ComponentWrapper>
    </ContainerRow>
  )
}
