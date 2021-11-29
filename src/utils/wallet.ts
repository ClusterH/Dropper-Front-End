export const setupNetwork = async () => {
  const provider = window.ethereum
  if (provider) {
    const chainId = 137
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }], // chainId: 137 for Polygon
      })
      return true
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${chainId.toString(16)}`,
                chainName: 'Polygon Mainnet',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18,
                },
                rpcUrls: ['https://polygon-rpc.com/', 'https://rpc-mainnet.matic.network'],
                blockExplorerUrls: [`https://polygonscan.com`],
              },
            ],
          })
          return true
        } catch (error) {
          console.error('Failed to setup the network in Metamask:', error)
          return false
        }
      }
    }
  } else {
    console.error("Can't setup the Polygon network on metamask because window.ethereum is undefined")
    return false
  }
}
