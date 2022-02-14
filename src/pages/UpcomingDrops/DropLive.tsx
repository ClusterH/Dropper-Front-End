import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import ARROW_RIGHT_ROUNDED from '../../assets/images/arrow-right-rounded.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import MainButton from '../../components/Buttons/MainButton'
import { ContainerColumn, ContainerRow, ImageContainer, SubText, TextCustom } from '../../styles/globalStyles'

const ButtonWrapper = styled(MainButton)`
  font-size: 26px;
  font-weight: bold;
`
const DropLive: React.FC = () => {
  return (
    <ContainerColumn justifyContent="center" margin="30px 0 100px">
      <SubText
        fontSize={'3.33vmax'}
        fontWeight={600}
        fontFamily={'RubikBold'}
        textAlign={'center'}
        margin={'24px 0'}
        borderImg={BORDER_EFFECT_IMG}
      >
        <ContainerRow>
          Drop&nbsp;
          <TextCustom
            color={'var(--secondary)'}
            fontSize={'3.33vmax'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            lineHeight={1.1}
            textAlign={'center'}
            margin={'2% 0'}
          >
            Live!
          </TextCustom>
        </ContainerRow>
      </SubText>
      <ButtonWrapper
        width={'fit-content'}
        borderRadius={'100px'}
        padding={'2.7vmax 3.4vmax'}
        backgroundColor={'var(--secondary)'}
        onClick={() => (window.location.href = '/clix')}
      >
        <TextCustom fontSize={'1.35vmax'} fontWeight={600}>
          Check Out This Drop &nbsp;
        </TextCustom>
        <ImageContainer src={ARROW_RIGHT_ROUNDED} width={'1.5vmax'} />
      </ButtonWrapper>
    </ContainerColumn>
  )
}

export default DropLive
