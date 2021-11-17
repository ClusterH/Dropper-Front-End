import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MainButton } from '../../components/Buttons/MainButton'
import { SearchBox } from '../../components/SearchBox'
import TabMenu from '../../components/TabMenu'
import {
  ComponentWrapper,
  ContainerRow,
  ImageContainer,
  PageWrapper,
  ResponsiveContainer,
  TextCustom,
} from '../../styles/globalStyles'
import Banner from '../../components/Banners'
import PIN_ICON from '../../assets/images/pin-icon.svg'
import { TwitterIcon } from '../../components/Icons'
import { MomentsList } from './Moments/MomentsList'
import { PacksList } from './Packs/PacksList'
import { Rankings } from './Rankings'
import { TSelectedTab } from '../../types'
import { useActiveWeb3React } from '../../hooks/useWeb3'
import { useGetPackList } from '../../hooks/useDropper'
import { shortenAddress } from '../../utils'
import { isMobile } from 'react-device-detect'

const ContainerWithoutLeftBorder = styled(ContainerRow)`
  border: 1px solid var(--light-navy-blue);
  border-left: none;
  justify-content: center;
`

const ContainerWithoutRightBorder = styled(ContainerRow)`
  border: 1px solid var(--light-navy-blue);
  border-right: none;
  justify-content: center;
`
const ContainerWithBottomBorder = styled(ContainerRow)`
  border: none;
  border-bottom: 1px solid var(--light-navy-blue);
  justify-content: space-around;
`

const Inventory: React.FC = () => {
  const { account } = useActiveWeb3React()
  const [selectedTab, setSelectedTab] = useState<TSelectedTab>('packs')
  useGetPackList()

  const handleTabItem = (item: TSelectedTab) => {
    setSelectedTab(item)
  }

  useEffect(() => {
    if (window.localStorage.getItem('selectedTab')) {
      setSelectedTab(JSON.parse(window.localStorage.getItem('selectedTab')!))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('selectedTab', JSON.stringify(selectedTab))
  }, [selectedTab])

  return (
    <PageWrapper>
      <Banner
        mainTitle={'Top Collections'}
        subTitle={'dropper'}
        summary={'a non-fungible toket (NFT) is a unit of data stored on a digital ledger.'}
      />
      <ComponentWrapper margin={isMobile ? '0' : '50px 0 0'} padding={'24px'}>
        <ContainerRow backgroundColor={'var(--dark-navy)'} padding={isMobile ? '10px' : '10px 30px'}>
          <ResponsiveContainer justifyContent={'space-between'}>
            <SearchBox width={isMobile ? '100%' : '30%'} height={'50px'} direction={'left'} />
            <TabMenu selectedTab={selectedTab} handleTabItem={handleTabItem} />
            <MainButton
              width={isMobile ? '100%' : 'fit-content'}
              borderRadius={'24px'}
              padding={'24px 24px'}
              backgroundColor={'var(--secondary)'}
              margin={'20px 0'}
              onClick={() => (window.location.href = '/clix')}
            >
              <TextCustom color={'var(--primary-text)'}>View All &nbsp;</TextCustom>
              <ImageContainer src={PIN_ICON} width={'30px'} />
            </MainButton>
          </ResponsiveContainer>
        </ContainerRow>
        <ContainerRow alignItems={'stretch'}>
          {/* <ContainerColumn backgroundColor={'var(--dark-navy)'} width={'20%'} justifyContent={'flex-start'}>
            <BoxCard
              backgroundColor={'var(--light-navy-blue)'}
              boxWidth={'100%'}
              boxHeight={'60px'}
              border={'none'}
              borderRadius={'0'}
              margin={'0'}
            >
              <TextCustom color={'var(--primary-text)'} fontSize={'20px'} fontWeight={600}>
                Filters
              </TextCustom>
            </BoxCard>
            <ContainerRow padding={'0'} margin={'0'} minHeight={'60px'} style={{ height: '60px' }}>
              <BoxCard
                backgroundColor={'var(--navy-blue)'}
                boxWidth={'30%'}
                boxHeight={'100%'}
                borderRadius={'0'}
                margin={'0'}
                border={'none'}
              >
                <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                  #01116
                </TextCustom>
              </BoxCard>
              <BoxCard backgroundColor={'transparent'} boxWidth={'70%'} borderRadius={'0'} margin={'0'} border={'none'}>
                <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                  {account ? shortenAddress(account) : ''}
                </TextCustom>
              </BoxCard>
            </ContainerRow>
            <ContainerRow gap={'0'} minHeight={'60px'} style={{ height: '60px' }}>
              <ContainerWithoutLeftBorder minHeight={'100%'}>
                <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                  Fausty
                </TextCustom>
              </ContainerWithoutLeftBorder>
              <ContainerWithoutRightBorder minHeight={'100%'}>
                <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                  @fausty
                </TextCustom>
              </ContainerWithoutRightBorder>
            </ContainerRow>
            <ContainerWithBottomBorder minHeight={'60px'}>
              <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
                @faustygg
              </TextCustom>
              <RoundedIconBox backColor={'var(--light-navy-blue)'} width={'45px'}>
                <TwitterIcon color={'var(--secondary)'} />
              </RoundedIconBox>
            </ContainerWithBottomBorder>
          </ContainerColumn> */}
          {selectedTab === 'moments' && <MomentsList />}
          {selectedTab === 'packs' && <PacksList setSelectedTab={setSelectedTab} />}
          {selectedTab === 'rankings' && <Rankings />}
        </ContainerRow>
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default Inventory
