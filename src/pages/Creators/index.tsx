import React from 'react'
import { isMobile } from 'react-device-detect'
import { PageWrapper, ResponsiveContainer, SpacerLarge, SpacerXSmall, TextCustom, TextTitle } from '../../styles/globalStyles'
import { TCreatorElement } from '../../types'
import CreatorCard from './CreatorCard'

const Creators: React.FC = () => {
  const creatorList: TCreatorElement[] = [
    {
      id: 0,
      name: 'Eric Faust',
      role: 'CEO',
      description: 'Eric has one successful exit in the entertainment space and has worked in SaaS for most of his career.',
      imgUrl: 'https://tournament-platform.s3.ca-central-1.amazonaws.com/eric+photo.png',
    },
    {
      id: 1,
      name: 'Laura Wilson',
      role: 'COO',
      description: 'Laura is a first time founder who has spent her career in scaling ecommerce and SaaS products globally.',
      imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/laura.png',
    },
    {
      id: 2,
      name: 'Ken McGaffey',
      role: 'CTO',
      description: 'Ken is an Army Captain, cyber security programmer, and entrepreneur. He spent time with Facebook, DARPA, and Boeing.',
      imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/ken.png',
    },
    {
      id: 3,
      name: 'John Chase',
      role: 'CFO',
      description:
        'John is the Former CFO of AbeBooks and Power Measurement. He also has extensive experience leading M&A, VC deals and IPOs.',
      imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/john.png',
    },
  ]

  return (
    <PageWrapper>
      <SpacerLarge />
      <ResponsiveContainer justifyContent={'center'}>
        <TextTitle>Meet Our</TextTitle>
        {!isMobile && <SpacerXSmall />}
        <TextCustom color={'var(--secondary)'} fontSize={'2.5rem'}>
          Creators
        </TextCustom>
      </ResponsiveContainer>

      <SpacerLarge />
      <ResponsiveContainer justifyContent={'center'}>
        {creatorList.map((item: TCreatorElement) => {
          return <CreatorCard key={item.id} item={item} />
        })}
      </ResponsiveContainer>
    </PageWrapper>
  )
}

export default Creators
