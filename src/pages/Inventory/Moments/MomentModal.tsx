import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { ReactComponent as Close } from '../../../assets/images/x.svg'
import { FacebookIcon, FavoriteIcon, LinkedInIcon, RedditIcon, TwitterIcon } from '../../../components/Icons'
import Modal from '../../../components/Modals/Modal'
import { VideoContainer } from '../../../components/VideoContainer'
import {
  BoxCard,
  ContainerColumn,
  ContainerRow,
  RoundedIconBox,
  SubText,
  TextCustom,
  TextDescription,
} from '../../../styles/globalStyles'
import { TMomentItem } from '../../../types'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  width: 100%;
`
const CloseIcon = styled.div`
  position: absolute;
  right: -15px;
  top: -15px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--secondary);
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const CloseColor = styled(Close)`
  path {
    stroke: #b2b9d2;
  }
  width: 18px;
  height: 18px;
`

const RoundedBoxWithShadow = styled(RoundedIconBox)`
  background: #31297b;
  box-shadow: 0px 7px 39px rgba(0, 0, 0, 0.05);
`

interface IMomentModal {
  moment: TMomentItem
  momentModalOpen: boolean
  toggleMomentModal: () => void
}

export const MomentModal: React.FC<IMomentModal> = ({ moment, momentModalOpen, toggleMomentModal }) => {
  const [favoriteItem, setFavoriteItem] = useState(false)

  function getModalContent() {
    return (
      <BoxCard
        boxWidth={'100%'}
        border={'5px solid var(--navy-blue)'}
        borderHover={'5px solid var(--navy-blue)'}
        backgroundColor={'var(--light-navy-blue)'}
        backgroundHover={'var(--light-navy-blue)'}
        borderRadius={'26px'}
        margin={'0'}
        alignItems={'stretch'}
        padding={'30px'}
        justifyContent={'space-around'}
      >
        <CloseIcon onClick={toggleMomentModal}>
          <CloseColor />
        </CloseIcon>
        <VideoContainer
          url={moment.awsAnimationUrl}
          posterUrl={moment.awsImageUrl}
          width={'64%'}
          height={'fit-content'}
          borderRadius={'10px'}
          border={'1px solid var(--navy-blue)'}
          isAutoPlay={true}
          isControls={true}
        />
        <ContainerColumn
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          padding={'20px 0 0 20px'}
          width={'34%'}
          gap={'15px'}
          backgroundColor={'var(--navy-blue-opacity)'}
          style={{ borderRadius: '10px' }}
        >
          <TextCustom color={'var(--primary-text)'} fontSize={'24px'} fontFamily={'RubikBold'} fontWeight={600}>
            {moment.name}
          </TextCustom>
          <TextDescription>{moment.description}</TextDescription>
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Collection: &nbsp;
            <SubText color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
              {moment.collection}
            </SubText>
          </TextCustom>
          {/* <TextCustom color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
            {moment.collection}
          </TextCustom> */}
          <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            {`Class: ${moment.rarity}`} &nbsp;
            <SubText color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
              {`#${moment.id}/${moment.totalMintedMoments}`}
            </SubText>
          </TextCustom>
          <ContainerRow justifyContent={'flex-start'}>
            {/* <TransparentBtn borderRadius={'39px'}>Place for Scale</TransparentBtn> */}
            <RoundedIconBox
              backColor={'var(--primary-opacity)'}
              width={'30px'}
              onClick={() => setFavoriteItem(!favoriteItem)}
            >
              <FavoriteIcon color={favoriteItem ? 'var(--secondary)' : 'var(--primary-text)'} width={'20px'} />
            </RoundedIconBox>
            <TextCustom color={'var(--primary-text)'} fontSize={'12px'} fontWeight={300}>
              Love This Item
            </TextCustom>
          </ContainerRow>
          {/* <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
            Share Socials
          </TextCustom>
          <ContainerRow justifyContent={'flex-start'}>
            <RoundedBoxWithShadow width={'30px'}>
              <TwitterIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
            </RoundedBoxWithShadow>
            <RoundedBoxWithShadow width={'30px'}>
              <FacebookIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
            </RoundedBoxWithShadow>
            <RoundedBoxWithShadow width={'30px'}>
              <RedditIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
            </RoundedBoxWithShadow>
            <RoundedBoxWithShadow width={'30px'}>
              <LinkedInIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
            </RoundedBoxWithShadow>
          </ContainerRow> */}
        </ContainerColumn>
      </BoxCard>
    )
  }
  return (
    <Modal
      isOpen={momentModalOpen}
      onDismiss={toggleMomentModal}
      width={isMobile ? '90%' : '70%'}
      padding={'15px'}
      borderRadius={'26px'}
      backColor={'transparent'}
      boxShadow={'none'}
      minHeight={false}
      maxHeight={100}
    >
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}
