import { arbitrumPublicClient, getNFTs, writeJson } from './veNFT.mjs'

// veRAM
const veContractAddress = '0xAAA343032aA79eE9a6897Dab03bef967c3289a06'

const data = await getNFTs(arbitrumPublicClient, veContractAddress)

writeJson(data, 'veRAM.json')
