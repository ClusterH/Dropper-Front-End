// This file is for dummy data used in this app

import { TCollectionItem, TCreatorElement, TInvestorElement, TPackItem, TPartnerElement, TTeamElement } from '../types'

export const packList: TPackItem[] = [
  {
    id: 1,
    level: 'Basic',
    count: 3,
    price: 40,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/basic-reveal.mp4',
    packURI: 'QmcABjG7aSbnssspjnDwWhvge9BF8oAUeVUXsSUXuGWfQS',
    cartQuantity: 0,
    featureList: ['1 Uncommon or better'],
  },
  {
    id: 2,
    level: 'Plus',
    count: 5,
    price: 75,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-pack-5.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/plus-reveal.mp4',
    packURI: 'QmcXUUrWPU9AzQxZeXN6K9sxyvoQS3Wmc6ZdAtgTam3syp',
    cartQuantity: 0,
    featureList: ['1 Rare or better'],
  },
  {
    id: 3,
    level: 'Premium',
    count: 7,
    price: 150,
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-7.png',
    animationUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/premium-reveal.mp4',
    packURI: 'QmcmsLTqpuftofE36KELxuX5zFXUChdjg3k7dkkbzzR5te',
    cartQuantity: 0,
    featureList: ['1 Epic or better'],
  },
]

export const commonList: TCollectionItem[] = [
  {
    id: 1,
    title: 'Arena 200 Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Arena+200+Clix.png',
  },
  {
    id: 2,
    title: 'Banana Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Banana+Clix.png',
  },
  {
    id: 3,
    title: 'Chicken Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 4,
    title: 'Clix Dinky',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 5,
    title: 'Clix Flex',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 6,
    title: 'Clix Thanks For The Clip',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 7,
    title: 'Clix The Tank',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 8,
    title: 'Dancing Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 9,
    title: 'EJ DASH Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 10,
    title: 'Fastest Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 11,
    title: 'Grin Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 12,
    title: 'Hype Me Up Clix',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 13,
    title: 'Longest Build Battle',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 14,
    title: 'Sit Down',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 15,
    title: 'The Clix Axe',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
]

export const uncommonList: TCollectionItem[] = [
  {
    id: 1,
    title: 'Clix 300IQ Grenade play',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Arena+200+Clix.png',
  },
  {
    id: 2,
    title: 'Clix Air Snipe',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Banana+Clix.png',
  },
  {
    id: 3,
    title: 'Clix Endgame',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 4,
    title: 'Clix Jumpshot No Scope',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 5,
    title: 'Clix Mariachi Surprise',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 6,
    title: 'Clix Snipes Cloakzy',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 7,
    title: 'Clix Voicecrack',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 8,
    title: 'Clix VS Ron',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 9,
    title: 'Sleepy Zex',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
]

export const rareList: TCollectionItem[] = [
  {
    id: 1,
    title: 'Clix 500K Highlights',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Arena+200+Clix.png',
  },
  {
    id: 2,
    title: `Clix KO's Tfue`,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Banana+Clix.png',
  },
  {
    id: 3,
    title: 'Clix VS Benjy',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 4,
    title: 'Clix VS Bugha',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 5,
    title: 'Clix VS Unknown',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
]

export const epicList: TCollectionItem[] = [
  {
    id: 1,
    title: 'Clix 1 Million Subscriber Montage',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Arena+200+Clix.png',
  },
  {
    id: 2,
    title: 'Clix First Twitch Clip',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Banana+Clix.png',
  },
  {
    id: 3,
    title: 'Clix Joins NRG',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 4,
    title: 'Clix Wins BFC',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 5,
    title: 'Clix Wins Twitch Rivals',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
]

export const mythicList: TCollectionItem[] = [
  {
    id: 1,
    title: 'Clix Box Fights',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Arena+200+Clix.png',
  },
  {
    id: 2,
    title: 'Clix Homer Grind',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://clixnfts.s3.us-east-2.amazonaws.com/Common/Banana+Clix.png',
  },
  {
    id: 3,
    title: 'Clix Never Change',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 4,
    title: 'Clix Porsche',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
  {
    id: 5,
    title: 'Clix World Cup',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    uri: 'https://dropper.s3.ca-central-1.amazonaws.com/clixpack-3.png',
  },
]

export const creatorList: TCreatorElement[] = [
  {
    id: 1,
    name: 'Jerome Bell',
    role: 'CEO',
    description:
      'This is the official NFT Ultimate Clix Collection by myself, Cody “Clix” Conrad! I have been working on something special for my community that’s been ride or die from day one. From the Fortnite World Cup, to winning the BFC and Twitch rivals, going 100-0 in boxfights, and even copping my dream car, you all have made this experience so amazing, and now we can share these moments together with this collection. I love making people happy and I hope that you’ll join me in this journey too!',
    imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-headshot.png',
  },
  {
    id: 2,
    name: 'Johaness Bell',
    role: 'CTO',
    description:
      'This is the official NFT Ultimate Clix Collection by myself, Cody “Clix” Conrad! I have been working on something special for my community that’s been ride or die from day one. From the Fortnite World Cup, to winning the BFC and Twitch rivals, going 100-0 in boxfights, and even copping my dream car, you all have made this experience so amazing, and now we can share these moments together with this collection. I love making people happy and I hope that you’ll join me in this journey too!',
    imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-headshot.png',
  },
  {
    id: 3,
    name: 'John Chase',
    role: 'COO',
    description:
      'This is the official NFT Ultimate Clix Collection by myself, Cody “Clix” Conrad! I have been working on something special for my community that’s been ride or die from day one. From the Fortnite World Cup, to winning the BFC and Twitch rivals, going 100-0 in boxfights, and even copping my dream car, you all have made this experience so amazing, and now we can share these moments together with this collection. I love making people happy and I hope that you’ll join me in this journey too!',
    imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-headshot.png',
  },
]

export const creatorBio: TCreatorElement = {
  id: 1,
  name: 'Jerome Bell',
  role: 'CEO',
  description:
    'This is the official NFT Ultimate Clix Collection by myself, Cody “Clix” Conrad! I have been working on something special for my community that’s been ride or die from day one. From the Fortnite World Cup, to winning the BFC and Twitch rivals, going 100-0 in boxfights, and even copping my dream car, you all have made this experience so amazing, and now we can share these moments together with this collection. I love making people happy and I hope that you’ll join me in this journey too!',
  imgUrl: 'https://dropper.s3.ca-central-1.amazonaws.com/clix-headshot.png',
}

export const teamList: TTeamElement[] = [
  {
    id: 1,
    name: 'Eric Faust',
    role: 'CEO & Co-Founder',
    imgUri: 'https://tournament-platform.s3.ca-central-1.amazonaws.com/eric+photo.png',
    twitterLink: 'https://twitter.com/ehfaust',
    linkedLink: 'https://www.linkedin.com/in/ehfaust/',
    skypeLink: '',
  },
  {
    id: 2,
    name: 'Laura Wilson',
    role: 'COO & Co-Founder',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/laura.png',
    twitterLink: '',
    linkedLink: 'https://www.linkedin.com/in/laurawil2225/',
    skypeLink: '',
  },
  {
    id: 3,
    name: 'Ken McGaffey',
    role: 'CTO',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/ken.png',
    twitterLink: 'https://twitter.com/sp0rk27',
    linkedLink: 'https://www.linkedin.com/in/kenneth-mcgaffey-1077b0168/',
    skypeLink: '',
  },
  {
    id: 4,
    name: 'John Chase',
    role: 'CFO',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/john.png',
    twitterLink: '',
    linkedLink: 'https://www.linkedin.com/in/johnlchase/',
    skypeLink: '',
  },
]

export const advisorList: TTeamElement[] = [
  {
    id: 1,
    name: 'Lonny Tetley',
    role: 'CEO & Co-Founder',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/Lonny-Tetley.png',
  },
  {
    id: 2,
    name: 'Sue Connors',
    role: 'COO & Co-Founder',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/sue.png',
  },
  {
    id: 3,
    name: 'Mike Gillis',
    role: 'CTO',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/mike-gillis.png',
  },
  {
    id: 4,
    name: 'Rohith Thumati',
    role: 'CFO',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/rohith.png',
  },
]

export const partnerList: TPartnerElement[] = [
  {
    id: 1,
    name: 'Polygon',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/polygon.png',
    twitter: 'https://twitter.com/0xpolygon?lang=en',
  },
  {
    id: 2,
    name: 'Cryptopathic',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/path.png',
    twitter: 'https://twitter.com/Cryptopathic',
  },
]

export const investorList: TInvestorElement[] = [
  {
    id: 1,
    name: 'Pirata Capital',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/Pirata+Capital_Logo_black.png',
    websiteLink: 'https://piratacapital.com/',
    twitterLink: 'https://twitter.com/pirata_capital?lang=en',
  },
  {
    id: 2,
    name: 'Arcanum Capital',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/arcanum.png',
    websiteLink: 'https://www.arcanum.capital/',
    twitterLink: 'https://twitter.com/arcanumcapital',
  },
  {
    id: 3,
    name: 'Canoe Financial',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/canoe.png',
    websiteLink: 'https://www.canoefinancial.com/',
    twitterLink: 'https://twitter.com/canoefinancial?lang=en',
  },
  {
    id: 4,
    name: '01 Capital',
    imgUri: 'https://dropper.s3.ca-central-1.amazonaws.com/01.png',
    websiteLink: 'https://www.zero1.capital/',
    twitterLink: 'https://twitter.com/01_capital?lang=en',
  },
]
