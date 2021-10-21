import React, { useEffect, useState } from 'react'
import { MainButton } from '../../components/Buttons/MainButton'
import { ContainerColumn, ContainerRow, Divider } from '../../styles/globalStyles'
import { AccMomentList } from './AccMomentList'
import { AccPackList } from './AccPackList'

export const AccCollections: React.FC = () => {
  const [activatedTab, setActivatedTab] = useState<'pack' | 'moment'>('pack')

  useEffect(() => {
    if (window.localStorage.getItem('activatedTab')) {
      setActivatedTab(JSON.parse(window.localStorage.getItem('activatedTab')!))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('activatedTab', JSON.stringify(activatedTab))
  }, [activatedTab])

  return (
    <ContainerColumn justifyContent={'flex-start'} alignItems={'flex-start'} height={'auto'}>
      <ContainerRow justifyContent={'flex-start'}>
        <MainButton
          borderRadius={'4px 4px 0 0'}
          color={activatedTab === 'pack' ? 'var(--primary-text)' : 'var(--secondary)'}
          backgroundColor={activatedTab === 'pack' ? 'var(--secondary)' : 'var(--primary)'}
          onClick={() => setActivatedTab('pack')}
        >
          Your Packs
        </MainButton>
        <MainButton
          borderRadius={'4px 4px 0 0'}
          color={activatedTab === 'moment' ? 'var(--primary-text)' : 'var(--secondary)'}
          backgroundColor={activatedTab === 'moment' ? 'var(--secondary)' : 'var(--primary)'}
          onClick={() => setActivatedTab('moment')}
        >
          Your Moments
        </MainButton>
      </ContainerRow>
      <Divider width={'100%'} height={'1px'} margin={'1px 0 12px 0'} />
      {activatedTab === 'pack' && <AccPackList setActivatedTab={setActivatedTab} />}
      {activatedTab === 'moment' && <AccMomentList />}
    </ContainerColumn>
  )
}
