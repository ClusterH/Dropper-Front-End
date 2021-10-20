import React from 'react'
import styled from 'styled-components'
import OnlineImages from '../../components/Icons/onlineImages'
import {
  BoxCard,
  ContainerRow,
  ContainerColumn,
  device,
  Divider,
  PageWrapper,
  ResponsiveContainer,
} from '../../styles/globalStyles'
import { AccCollections } from './AccCollections'
import { AccountInfo } from './AccInfo'
import { isMobile } from 'react-device-detect'

const AccImgWrapper = styled(BoxCard)`
  padding: 0;
  margin: 0;
  img {
    border-radius: 10px;
  }
`

const Account: React.FC = () => {
  return (
    <PageWrapper>
      <OnlineImages
        imgHeight={'180px'}
        url={'https://f8n-production.imgix.net/creators/profile/fcusz42mh-obs-gif-4i7ctk.gif?q=90&w=1500'}
      ></OnlineImages>
      <Divider width={'100%'} height={'1px'} margin={'0'} />
      <ContainerRow margin={'-120px 0 0 0'} width={'80%'}>
        <AccImgWrapper boxWidth={'180px'} boxHeight={'180px'}>
          <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/discord-logo.png?fit=fill'}></OnlineImages>
        </AccImgWrapper>
      </ContainerRow>
      <ResponsiveContainer width={'80%'} alignItems={'flex-start'} margin={'50px 0 0'}>
        <AccountInfo />
        <AccCollections />
      </ResponsiveContainer>
    </PageWrapper>
  )
}

export default Account
