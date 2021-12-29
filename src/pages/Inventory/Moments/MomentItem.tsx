import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { FacebookIcon, FavoriteIcon, LinkedInIcon, RedditIcon, TwitterIcon } from '../../../components/Icons'
import { VideoContainer } from '../../../components/VideoContainer'
import { BoxCard, ContainerColumn, ContainerRow, RoundedIconBox, TextCustom } from '../../../styles/globalStyles'
import { TMomentItem } from '../../../types'

export const MomentItem: React.FC<{ moment: TMomentItem; onClick: () => void }> = ({ moment, onClick }) => {
  const [favoriteItem, setFavoriteItem] = useState(false)

  return (
    <BoxCard
      boxWidth={isMobile ? '100%' : '48%'}
      border={'3px solid var(--navy-blue)'}
      borderHover={'5px solid var(--navy-blue)'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--light-navy-blue)'}
      borderRadius={'26px'}
      margin={'0'}
      alignItems={'center'}
      padding={'20px'}
      onClick={onClick}
    >
      <VideoContainer
        url={moment.awsAnimationUrl}
        posterUrl={moment.awsImageUrl}
        width={'60%'}
        height={'fit-content'}
        borderRadius={'10px'}
        border={'3px solid var(--navy-blue)'}
        isControls={true}
      />
      <ContainerColumn justifyContent={'flex-start'} alignItems={'flex-start'} padding={'20px 0 0 20px'} gap={'12px'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          {`${moment.name} #${moment.id}`}
        </TextCustom>
        <TextCustom color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
          {moment.collection}
        </TextCustom>
        <ContainerRow justifyContent={'flex-start'}>
          <RoundedIconBox backColor={'var(--primary-text)'} width={'30px'} onClick={() => setFavoriteItem(!favoriteItem)}>
            <FavoriteIcon color={favoriteItem ? 'var(--secondary)' : '#666666'} />
          </RoundedIconBox>
          <TextCustom color={'var(--primary-text)'} fontSize={'12px'} fontWeight={300}>
            Love This Item
          </TextCustom>
        </ContainerRow>
        {/* <TextCustom color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
          {'Share Socials'}
        </TextCustom>
        <ContainerRow justifyContent={'flex-start'}>
          <RoundedIconBox backColor={'var(--primary-text)'} width={'30px'}>
            <TwitterIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
          <RoundedIconBox backColor={'var(--primary-text)'} width={'30px'}>
            <FacebookIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
          <RoundedIconBox backColor={'var(--primary-text)'} width={'30px'}>
            <RedditIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
          <RoundedIconBox backColor={'var(--primary-text)'} width={'30px'}>
            <LinkedInIcon color={'var(--secondary)'} width={'16px'} height={'16px'} />
          </RoundedIconBox>
        </ContainerRow> */}
      </ContainerColumn>
    </BoxCard>
  )
}
