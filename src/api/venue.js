import { MdSportsSoccer } from 'react-icons/md';
import { BsDice5 } from 'react-icons/bs';
import { BsController } from 'react-icons/bs';
import { CgCardSpades } from 'react-icons/cg';
import { RiBilliardsFill } from 'react-icons/ri';
import { BsMailbox2 } from 'react-icons/bs';
import { GiCirclingFish } from 'react-icons/gi';
import { BsDownload } from 'react-icons/bs';

export const venueList = [
  {
    name: 'SPORTS',
    name2: '体育赛事',
    desc: 'Efforts to create exciting and popular sports entertainment games. Provide you with thousands of exciting sports events every day and a variety of entertainment options. There are also live animation and live video, so that you can have a perfect gaming experience',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 0,
    key: 'Sports',
    Icon: <MdSportsSoccer />,
    data: ['OB体育', "IM体育",'FB体育']
  },
  {
    name: 'CASINO',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 1,
    key: 'Casino',
    Icon: < BsDice5 />,
    data: ['OB Live', "eBET Live",'AG Live', 'BG Live']
  },
  {
    name: 'ESPORTS',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 2,
    key: 'E-Sports',
    Icon: < BsController />,
    data: ['OB e-Sports', "Thunderbolt",'IM e-Sports']
  },
  {
    name: 'BOARDS',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 3,
    key: 'Boards',
    Icon: < CgCardSpades />,
    data: ['OB Chess and Cards', "Yunyou Chess and Cards",'IM Chess', 'Chess and Cards', 'Boya Chess and Cards']
  },
  {
    name: 'LOTTERY',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 4,
    key: 'Lottery',
    Icon: < RiBilliardsFill />,
    data: ['OB Lottery', "Double Win Lottery",'TCG Lottery', 'OB Hash']
  },
  {
    name: 'SLOT',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 5,
    key: 'Slot',
    Icon: < BsMailbox2 />,
    data: ['OB Electronics', "PG Electronics"]
  },
  {
    name: 'FISHING',
    descChinese: '努力打造精彩、流行的体育娱乐游戏。每天为您提供数以千计的精彩体育赛事和多种娱乐选择。还有现场动画和现场视频，让您拥有完美的游戏体验',
    id: 6,
    key: 'Fishing',
    Icon: < GiCirclingFish />,
    data: ['OB Fishing', "Literal Fishing",'AG Fishing']
  },
  {
    name: 'App',
    id: 7,
    key: 'App',
    Icon: < BsDownload />
  },
]