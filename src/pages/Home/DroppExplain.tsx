import React from 'react'
import OnlineImages from '../../components/Icons/onlineImages'
import { BigBox, ComponentWrapper, ContainerColumn, ContainerRow, TextMain } from '../../styles/globalStyles'

export const DroppExplain: React.FC = () => {
  return (
    <ComponentWrapper padding={'0'}>
      <BigBox>
        <ContainerRow>
          <ContainerColumn width={'32%'}>
            <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/logos.png'} imgWidth={'90%'} />
            <TextMain>Celebrity creators link content platform to verify identify.</TextMain>
          </ContainerColumn>
          <ContainerColumn width={'32%'}>
            <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/solodropper1.png'} imgWidth={'90%'} />
            <TextMain>They choose their best moments with the help of fans.</TextMain>
          </ContainerColumn>
          <ContainerColumn width={'32%'}>
            <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/sidewayspack.png'} imgWidth={'90%'} />
            <TextMain>Open and collect packs from your favorite creators.</TextMain>
          </ContainerColumn>
        </ContainerRow>
      </BigBox>
    </ComponentWrapper>
  )
}
