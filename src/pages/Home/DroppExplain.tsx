import React from 'react'
import { isMobile } from 'react-device-detect'
import OnlineImages from '../../components/Icons/onlineImages'
import { BigBox, ComponentWrapper, ContainerColumn, TextMain, ResponsiveContainer } from '../../styles/globalStyles'

export const DroppExplainItem: React.FC<{ url: string; description: string }> = ({ url, description }) => {
  return (
    <ContainerColumn width={isMobile ? '100%' : '32%'}>
      <OnlineImages url={url} imgWidth={isMobile ? '50%' : '90%'} />
      <TextMain>{description}</TextMain>
    </ContainerColumn>
  )
}

export const DroppExplain: React.FC = () => {
  return (
    <ComponentWrapper padding={'24px'}>
      <BigBox>
        <ResponsiveContainer>
          <DroppExplainItem
            url={'https://dropper.s3.ca-central-1.amazonaws.com/logos.png'}
            description={'Celebrity creators link content platform to verify identify.'}
          />
          <DroppExplainItem
            url={'https://dropper.s3.ca-central-1.amazonaws.com/solodropper1.png'}
            description={'They choose their best moments with the help of fans.'}
          />
          <DroppExplainItem
            url={'https://dropper.s3.ca-central-1.amazonaws.com/sidewayspack.png'}
            description={'Open and collect packs from your favorite creators.'}
          />
        </ResponsiveContainer>
      </BigBox>
    </ComponentWrapper>
  )
}
