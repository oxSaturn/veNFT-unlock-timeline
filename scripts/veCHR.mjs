import { arbitrumPublicClient, getNFTs, writeJson } from './veNFT.mjs'

const veContractAddress = '0x9A01857f33aa382b1d5bb96C3180347862432B0d'

const data = await getNFTs(arbitrumPublicClient, veContractAddress)

writeJson(data, 'veCHR.json')
