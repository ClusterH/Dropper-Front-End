// This file is for dummy data used in this app

import { TPackItem } from '../types'

export const packList: TPackItem[] = [
  {
    id: 1,
    level: 'Basic',
    count: 3,
    price: 39.99,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/basic-reveal.mp4',
  },
  {
    id: 2,
    level: 'Plus',
    count: 5,
    price: 74.99,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-pack-5.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/plus-reveal.mp4',
  },
  {
    id: 3,
    level: 'Premium',
    count: 7,
    price: 99.99,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-7.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/premium-reveal.mp4',
  },
]
// 0x040000000000000000000000000000000d
// 0x030000000000000000000000000000003b
// 0x00000000d = 13
// 0x04
