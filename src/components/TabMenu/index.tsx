import React from 'react'
import styled from 'styled-components'
import { ContainerRow, TextCustom, size } from '../../styles/globalStyles'
import { device } from '../../styles/globalStyles'
import { TSelectedTab } from '../../types'
import { MainButton } from '../Buttons/MainButton'
import { isMobile } from 'react-device-detect'

const TabMenuContainer = styled(ContainerRow)`
  padding: 0rem 1rem;
  border-radius: 32px;
  border: 3px solid var(--light-navy-blue);
  @media screen and (max-width: ${size.tablet}) {
    margin-top: 5%;
  }
  @media screen and (max-width: ${size.mobileL}) {
    margin-top: 5%;
  }
`
const TabMenuItem = styled(MainButton)`
  border-radius: 32px;
  height: 100%;
  padding: 8px 30px;
  box-shadow: none;
  &:active {
    background-color: var(--secondary);
  }
  &:hover {
    background-color: var(--secondary);
  }
  @media screen and (max-width: ${size.tablet}) {
    width: 50%;
  }
`
interface ITabMenu {
  selectedTab: TSelectedTab
  handleTabItem: (item: TSelectedTab) => void
}

const TabMenu: React.FC<ITabMenu> = ({ handleTabItem, selectedTab }) => {
  return (
    <TabMenuContainer justifyContent={'flex-start'} width={isMobile ? '100%' : 'fit-content'}>
      <TabMenuItem
        backgroundColor={selectedTab === 'moments' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('moments')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Moments'}</TextCustom>
      </TabMenuItem>
      <TabMenuItem
        backgroundColor={selectedTab === 'packs' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('packs')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Packs'}</TextCustom>
      </TabMenuItem>
      {/* <TabMenuItem
        backgroundColor={selectedTab === 'rankings' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('rankings')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Rankings'}</TextCustom>
      </TabMenuItem> */}
    </TabMenuContainer>
  )
}

export default TabMenu
