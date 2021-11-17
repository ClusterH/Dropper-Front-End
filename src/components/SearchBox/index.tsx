import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { CustomInput, RoundedIconBox, RoundedInputContainer } from '../../styles/globalStyles'
import { SearchIcon } from '../Icons'

const SearchRightIconButton = styled(RoundedIconBox)`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
`
const SearchLeftIconButton = styled(RoundedIconBox)`
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
`
interface ISearchBox {
  width?: string
  height?: string
  direction?: string
}

export const SearchBox: React.FC<ISearchBox> = ({ width, height, direction = 'right' }) => {
  return (
    <>
      {direction === 'right' && (
        <RoundedInputContainer width={width} height={height} border={'2px solid var(--grey-opacity)'}>
          <CustomInput
            width={'100%'}
            height={'100%'}
            padding={isMobile ? '16px 20px' : '20px 25px'}
            fontSize={isMobile ? '1rem' : '1.2rem'}
            border={'none'}
            backColor={'transparent'}
            placeholder={'Search related to NFT'}
          />
          <SearchRightIconButton width={'42px'} backColor={'var(--secondary)'}>
            <SearchIcon width={'16px'} height={'16px'} color={'var(--primary-text)'} />
          </SearchRightIconButton>
        </RoundedInputContainer>
      )}
      {direction === 'left' && (
        <RoundedInputContainer width={width} height={height} border={'none'}>
          <CustomInput
            width={'100%'}
            height={'100%'}
            padding={isMobile ? '16px 20px 16px 55px' : '10px 25px 10px 20%'}
            fontSize={isMobile ? '1rem' : '1.2rem'}
            border={'none'}
            backColor={'transparent'}
            placeholder={'Search related to NFT'}
          />
          <SearchLeftIconButton width={'42px'} backColor={'var(--secondary)'}>
            <SearchIcon width={'16px'} height={'16px'} color={'var(--primary-text)'} />
          </SearchLeftIconButton>
        </RoundedInputContainer>
      )}
    </>
  )
}
