import React from 'react'
import { isMobile } from 'react-device-detect'
import Counter from '../../components/Counter'
import { RoundedCheckIcon } from '../../components/Icons'
import { usePackItem } from '../../hooks/useCollection'
import {
  BoxCard,
  ContainerRow,
  ImageContainer,
  ImageIconContainer,
  TextCustom,
  TextMain,
} from '../../styles/globalStyles'
import { TPackItem } from '../../types'

const featureList = ['Features one', 'Features Two', 'Features Three', 'Features Four', 'Features Five', 'Features Six']

export const PackItem: React.FC<{ pack: TPackItem; currentTotalPrice: number }> = ({ pack, currentTotalPrice }) => {
  const { count, setCount, isCardOver, setIsCardOver } = usePackItem(pack.id, pack.cartQuantity)

  return (
    <BoxCard
      boxWidth={'30%'}
      border={'none'}
      borderHover={'none'}
      backgroundColor={'var(--light-navy-blue)'}
      backgroundHover={'var(--light-navy-blue)'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      padding={'20px'}
    >
      <ImageIconContainer
        position={'relative'}
        boxWidth={'251px'}
        boxHeight={'251px'}
        padding={'0'}
        border={`5px solid ${isCardOver ? 'var(--primary-text)' : 'var(--light-navy)'}`}
        backgroundColor={'var(--purple)'}
        margin={'-30% 0 0 0'}
      >
        <ImageContainer src={pack.uri} width={'100%'} height={'100%'} borderRadius={'50%'} objectFit={'cover'} />
      </ImageIconContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.8rem' : '35px'}
        fontWeight={600}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 0 10% 0'}
      >
        {pack.level}
      </TextCustom>
      <TextMain>{`${pack.count} Moments @ $${pack.price}`}</TextMain>
      {pack.featureList?.map((item, index) => {
        return (
          <ContainerRow
            key={`pack_${index}`}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'90%'}
            margin={'0 0 20px 0'}
          >
            <TextCustom
              color={'var(--primary-text)'}
              fontSize={isMobile ? '0.8rem' : '1rem'}
              fontWeight={300}
              fontFamily={'Rubik'}
              lineHeight={1.1}
              textAlign={'center'}
              margin={'5% 0 5% 0'}
            >
              {`${item} Package`}
            </TextCustom>
            {/* {index < 4 || pack.level === 'Premium' || (index === 4 && pack.level === 'Plus') ? ( */}
            <RoundedCheckIcon isActive={true} width={'20px'} height={'20px'} color={'#FFFFFF'} />
            {/* ) : (
              <RoundedCheckIcon isActive={false} width={'20px'} height={'20px'} color={'#757575'} />
            )} */}
          </ContainerRow>
        )
      })}
      <Counter
        count={count}
        setCount={setCount}
        isDisablePlusIcon={currentTotalPrice + pack.price > 300}
        isOver={isCardOver}
      />
    </BoxCard>
  )
}

// export const PackItem: React.FC<{ pack: TPackItem }> = ({ pack }) => {
//   const [pendingTx, setPendingTx] = useState<boolean>(false)
//   const { onBuyPack } = useBuyPack(pack.id, 1)
//   const { account } = useActiveWeb3React()

//   return (
//     <ContainerColumn width={isMobile ? '100%' : '32%'} height={'auto'} padding={isMobile ? '0 0 70px' : '0'}>
//       <OnlineImages url={pack.uri} imgWidth={isMobile ? '90%' : '90%'} />
//       <TextMain>{pack.level}</TextMain>
//       <TextDescription>{`${pack.count} Moments @ $${pack.price}`}</TextDescription>
//       <TransparentBtn
//         borderRadius={'24px'}
//         padding={'24px 24px'}
//         margin={'24px 0 0'}
//         disabled={pendingTx || account === null || account === undefined}
//         onClick={async () => {
//           setPendingTx(true)
//           try {
//             const res = await onBuyPack(pack.id, 1)
//             setPendingTx(false)
//             if (res) window.location.href = `/account`
//           } catch (e) {
//             setPendingTx(false)
//           }
//         }}
//       >
//         {pendingTx ? 'Processing' : 'Buy Now!'}
//         <USDCIcon />
//       </TransparentBtn>
//       {pendingTx && <ProcessingLoader />}
//     </ContainerColumn>
//   )
// }
