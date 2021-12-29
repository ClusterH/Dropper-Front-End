import React from 'react'
import { isMobile } from 'react-device-detect'
import Counter from '../../components/Counter'
import { RoundedCheckIcon } from '../../components/Icons'
import { usePackItem } from '../../hooks/useCollection'
import { BoxCard, ContainerRow, ImageContainer, ImageIconContainer, TextCustom, TextMain } from '../../styles/globalStyles'
import { TPackItem } from '../../types'

export const PackItem: React.FC<{ pack: TPackItem; currentTotalPrice: number }> = ({ pack, currentTotalPrice }) => {
  const { count, setCount, isCardOver, setIsCardOver } = usePackItem(pack.id, pack.cartQuantity)

  return (
    <BoxCard
      boxWidth={isMobile ? '90%' : '30%'}
      border={'none'}
      borderHover={'none'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--light-navy-blue)'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      padding={'20px'}
      margin={isMobile ? '12%' : '12px'}
    >
      <ImageIconContainer
        position={'relative'}
        boxWidth={isMobile ? '200px' : '251px'}
        boxHeight={isMobile ? '200px' : '251px'}
        padding={'0'}
        border={`5px solid ${isCardOver ? 'var(--primary-text)' : 'var(--light-navy)'}`}
        backgroundColor={'var(--purple)'}
        margin={'-20% 0 0 0'}
      >
        <ImageContainer src={pack.uri} width={'100%'} height={'100%'} borderRadius={'50%'} objectFit={'cover'} />
      </ImageIconContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '1.2rem' : '35px'}
        fontWeight={600}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={isMobile ? '8% 0 5% 0' : '10% 0'}
      >
        {pack.level}
      </TextCustom>
      <TextMain>{`${pack.count} Moments @ $${pack.price}`}</TextMain>
      {pack.featureList?.map((item, index) => {
        return (
          <ContainerRow key={`pack_${index}`} justifyContent={'space-between'} alignItems={'center'} width={'90%'} margin={'0 0 20px 0'}>
            <TextCustom
              color={'var(--primary-text)'}
              fontSize={isMobile ? '0.8rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              lineHeight={1.1}
              textAlign={'center'}
              margin={'5% 0 5% 0'}
            >
              {`${item} Package`}
            </TextCustom>
            {/* {index < 4 || pack.level === 'Premium' || (index === 4 && pack.level === 'Plus') ? ( */}
            <RoundedCheckIcon isActive={true} width={'20px'} height={'20px'} color={'#FFFFFF'} />
            {/* ) : (
              <RoundedCheckIcon isActive={false} width={'20px'} height={'20px'} color={'#757575'} />
            )} */}
          </ContainerRow>
        )
      })}
      <Counter count={count} setCount={setCount} isDisablePlusIcon={currentTotalPrice + pack.price > 300} isOver={isCardOver} />
    </BoxCard>
  )
}
