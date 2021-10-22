// This file is for dummy data used in this app

import { TPackItem } from '../types'

export const packList: TPackItem[] = [
  {
    id: 1,
    level: 'Basic',
    count: 3,
    price: 40,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/basic-reveal.mp4',
    packURI: 'QmcABjG7aSbnssspjnDwWhvge9BF8oAUeVUXsSUXuGWfQS',
  },
  {
    id: 2,
    level: 'Plus',
    count: 5,
    price: 75,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-pack-5.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/plus-reveal.mp4',
    packURI: 'QmcXUUrWPU9AzQxZeXN6K9sxyvoQS3Wmc6ZdAtgTam3syp',
  },
  {
    id: 3,
    level: 'Premium',
    count: 7,
    price: 150,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-7.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/premium-reveal.mp4',
    packURI: 'QmcmsLTqpuftofE36KELxuX5zFXUChdjg3k7dkkbzzR5te',
  },
]
