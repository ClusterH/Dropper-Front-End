// This file is for dummy data used in this app

import { TPackItem } from '../types'

export const packList: TPackItem[] = [
  {
    id: 1,
    level: 'Basic',
    count: 3,
    price: 39.99,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 2,
    level: 'Plus',
    count: 5,
    price: 74.99,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-pack-5.png',
  },
  {
    id: 3,
    level: 'Premium',
    count: 7,
    price: 99.99,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-7.png',
  },
]
