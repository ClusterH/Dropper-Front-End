import React from 'react'
import { isMobile } from 'react-device-detect'
import { ComponentWrapper, PageWrapper, TextCustom } from '../../styles/globalStyles'
import RankList from './RankList'

const Ranks: React.FC = () => {
  return (
    <PageWrapper>
      <ComponentWrapper>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          Comming soon
        </TextCustom>
      </ComponentWrapper>
      {/* <RankList /> */}
    </PageWrapper>
  )
}

export default Ranks
