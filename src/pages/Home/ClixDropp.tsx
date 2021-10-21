import React from 'react'
import { isMobile } from 'react-device-detect'
import { TransparentBtn } from '../../components/Buttons/MainButton'
import OnlineImages from '../../components/Icons/onlineImages'
import {
  ComponentWrapper,
  ContainerColumn,
  SpacerMedium,
  TextCustom,
  TextMain,
  device,
  ResponsiveContainer,
} from '../../styles/globalStyles'

export const ClixDropp: React.FC = () => {
  return (
    <ComponentWrapper margin={'100px 0'} padding={'24px'}>
      <ContainerColumn>
        <ResponsiveContainer>
          <ContainerColumn padding={'0 24px 0 0'}>
            <TextCustom
              color={'var(--primary-text)'}
              fontSize={isMobile ? '2.5rem' : '3.5rem'}
              fontWeight={300}
              lineHeight={1.2}
            >
              Compete to be Clix&apos;s #1 Fan!
            </TextCustom>
            <TextMain>Collect his full collection starting October 21st!</TextMain>
          </ContainerColumn>
          <OnlineImages url={'https://dropper.s3.ca-central-1.amazonaws.com/clix-pack-5.png'} imgWidth={'350px'} />
        </ResponsiveContainer>
        <SpacerMedium />
        <TransparentBtn
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'24px 24px'}
          onClick={() => (window.location.href = '/clix')}
        >
          See Clix&apos;s First Dropp!
        </TransparentBtn>
      </ContainerColumn>
    </ComponentWrapper>
  )
}
