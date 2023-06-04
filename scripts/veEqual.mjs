import { fantomPublicClient, getNFTs, writeJson } from './veNFT.mjs'

// veEqual
const veContractAddress = '0x8313f3551c4d3984ffbadfb42f780d0c8763ce94'

const data = await getNFTs(fantomPublicClient, veContractAddress)

writeJson(data, 'veEqual.json')
