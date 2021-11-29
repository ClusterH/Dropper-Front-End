import React, { useState } from 'react'
import { FacebookIcon, FavoriteIcon, LinkedInIcon, RedditIcon, TwitterIcon } from '../../components/Icons'
import {
  BoxCard,
  ContainerColumn,
  ContainerRow,
  ImageContainer,
  RoundedIconBox,
  TextCustom,
} from '../../styles/globalStyles'

export const PacksItem: React.FC<{ width?: string }> = ({ width }) => {
  const [favoriteItem, setFavoriteItem] = useState(false)

  return (
    <BoxCard
      boxWidth={width}
      border={'3px solid var(--navy-blue)'}
      borderHover={'5px solid var(--navy-blue)'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--light-navy-blue)'}
      borderRadius={'26px'}
      margin={'0'}
      alignItems={'stretch'}
      padding={'20px'}
    >
      <ImageContainer
        src={'https://dropper.s3.ca-central-1.amazonaws.com/solodropper1.png'}
        width={'50%'}
        height={'100%'}
        borderRadius={'10px'}
        style={{ border: '3px solid var(--navy-blue)' }}
      />
      <ContainerColumn justifyContent={'flex-start'} alignItems={'flex-start'} padding={'20px 0 0 20px'} gap={'12px'}>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          @ThereImgg
        </TextCustom>
        <TextCustom color={'var(--secondary)'} fontSize={'16px'} fontWeight={300}>
          Realm
        </TextCustom>
        <ContainerRow justifyContent={'flex-start'}>
          <RoundedIconBox
            backColor={'var(--primary-text)'}
            width={'30px'}
            onClick={() => setFavoriteItem(!favoriteItem)}
          >
            <FavoriteIcon color={favoriteItem ? 'var(--secondary)' : '#666666'} />
          </RoundedIconBox>
          <TextCustom color={'var(--primary-text)'} fontSize={'12px'} fontWeight={300}>
            Love This Item
          </TextCustom>
        </ContainerRow>
        <TextCustom color={'var(--primary-text)'} fontSize={'16px'} fontWeight={300}>
          Share Socials
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
        </ContainerRow>
      </ContainerColumn>
    </BoxCard>
  )
}
