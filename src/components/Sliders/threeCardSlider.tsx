import React, { useMemo, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import CollectionCard from '../../components/Cards/collectionCard'
import NormalButtonCarousel from '../../components/Carousel/NormalButtonCarousel'
import { AWS_BASE_URI } from '../../constants/momentsURIs'
import { ComponentWrapper, ContainerColumn, ContainerRow, SubText, TextCustom } from '../../styles/globalStyles'
import { TCollectionItem, TRarity } from '../../types'

const CollectionListBox = styled(ContainerRow)`
  width: 100%;
  min-width: 100%;
  overflow: hidden;
  align-items: flex-start;
  gap: 0;
`

const pageSize = isMobile ? 1 : 3

const Slider: React.FC<{ sliderList: TCollectionItem[]; rarity: TRarity }> = ({ sliderList, rarity }) => {
  const collectionRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [direction, setDirection] = useState<string>('left')

  const onPageChange = (page: number, direction: string) => {
    setCurrentPage(page)
    setDirection(direction)
    const scrollWidth = collectionRef.current?.clientWidth || 0
    const collectionLeft = collectionRef.current?.scrollLeft || 0
    const collectionBoxWidth = collectionRef.current?.scrollWidth || 0
    if (direction === 'left') {
      let scrollLeft = collectionLeft - scrollWidth
      if (collectionLeft < scrollWidth * 1.5) {
        scrollLeft = 0
      }
      collectionRef.current?.scroll({ left: scrollLeft, behavior: 'smooth' })
    }
    if (direction === 'right') {
      let scrollLeft = collectionLeft + scrollWidth
      if (collectionBoxWidth - collectionLeft < scrollWidth * 1.5) {
        scrollLeft = collectionBoxWidth
      }
      collectionRef.current?.scroll({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  const rangeBlock = useMemo(() => {
    const length = Math.ceil(sliderList.length / pageSize)
    return Array.from({ length }, (_, idx) => idx)
  }, [sliderList, pageSize])

  const collectionBlock = (idx: number) => {
    return sliderList.slice(idx, idx + pageSize)
  }

  return (
    <ContainerRow backgroundColor={'transparent'} justifyContent={'center'} padding={'60px 0'}>
      <ComponentWrapper margin={isMobile ? '0' : '60px 0'} padding={'24px'}>
        <ContainerColumn justifyContent={'flex-start'} alignItems={'center'} padding={'0'} margin={'0 0 20px 0'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '2rem' : '3rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
          >
            The Collection&nbsp;
          </TextCustom>
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '2rem' : '3rem'}
            fontWeight={600}
            fontFamily={'RubikBold'}
            textAlign={'center'}
            borderImg={BORDER_EFFECT_IMG}
          >
            {rarity}
          </SubText>
        </ContainerColumn>
        <NormalButtonCarousel
          totalCount={sliderList.length}
          pageSize={pageSize}
          currentPage={currentPage}
          direction={direction}
          onPageChange={(page: number, direction: string) => onPageChange(page, direction)}
        >
          <CollectionListBox margin={'0'} padding={'0'} ref={collectionRef}>
            {rangeBlock.map((idx) => {
              return (
                <ContainerRow
                  key={`div_${idx}`}
                  width={'100%'}
                  justifyContent={'flex-start'}
                  alignItems={'flex-start'}
                  flexWrap={'wrap'}
                  padding={'0'}
                  margin={'0'}
                  gap={isMobile ? '0' : '1.5%'}
                  style={{ minWidth: '100%' }}
                >
                  {collectionBlock(idx * pageSize).map((item, index) => {
                    return (
                      <CollectionCard
                        key={item.id}
                        boxWidth={isMobile ? '100%' : '30%'}
                        imgWidth={isMobile ? '160px' : '250px'}
                        imgHeight={isMobile ? '160px' : '250px'}
                        url={`${AWS_BASE_URI}${rarity}/${item.title.replaceAll(' ', '+')}.png`}
                        title={item.title}
                        contentUrl={`${AWS_BASE_URI}${rarity}/${item.title.replaceAll(' ', '+')}.txt`}
                        isVertical={true}
                      />
                    )
                  })}
                </ContainerRow>
              )
            })}
          </CollectionListBox>
        </NormalButtonCarousel>
      </ComponentWrapper>
    </ContainerRow>
  )
}

export default Slider
