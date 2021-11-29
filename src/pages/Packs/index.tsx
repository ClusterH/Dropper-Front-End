import React, { useMemo, useState } from 'react'
import PIN_ICON from '../../assets/images/pin-icon.svg'
import Banner from '../../components/Banners'
import { MainButton } from '../../components/Buttons/MainButton'
import { SearchBox } from '../../components/SearchBox'
import {
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  ImageContainer,
  PageWrapper,
  TextCustom,
} from '../../styles/globalStyles'
import { PacksItem } from './PacksItem'

const PageSize = 6
const packList = [
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
  {
    title: '@ThereImgg',
  },
]

const Packs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const currentPackList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return packList.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <PageWrapper>
      <Banner
        mainTitle={'Top Collections'}
        subTitle={'dropper'}
        summary={'a non-fungible toket (NFT) is a unit of data stored on a digital ledger.'}
      />
      <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
        <ContainerRow backgroundColor={'var(--dark-navy)'} padding={'8px 30px'}>
          <SearchBox width={'30%'} height={'50px'} direction={'left'} />
          <MainButton
            width={'fit-content'}
            borderRadius={'24px'}
            padding={'24px 24px'}
            backgroundColor={'var(--secondary)'}
            margin={'20px 0'}
            onClick={() => (window.location.href = '/clix')}
          >
            <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
              View All Collections &nbsp;
            </TextCustom>
            <ImageContainer src={PIN_ICON} width={'30px'} />
          </MainButton>
        </ContainerRow>
        <ContainerColumn width={'100%'} padding={'0'} margin={'0'}>
          <ContainerRow
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            padding={'30px 0 0 0px'}
            gap={'20px'}
          >
            {currentPackList.map((item, index) => {
              return <PacksItem key={index} width={'32%'} />
            })}
          </ContainerRow>
        </ContainerColumn>
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default Packs
