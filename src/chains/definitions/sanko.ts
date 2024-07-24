import { defineChain } from '../../utils/chain/defineChain.js'

export const sanko = /*#__PURE__*/ defineChain({
  id: 1996,
  name: 'Sanko',
  network: 'Sanko',
  nativeCurrency: { name: 'DMT', symbol: 'DMT', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://mainnet.sanko.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Sanko Explorer',
      url: 'https://explorer.sanko.xyz',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca827b4738f84046303698b556EF06499f1a7678',
      blockCreated: 35,
    },
  },
})
