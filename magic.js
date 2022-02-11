import { Magic } from '@magic-sdk/react-native';
import Web3 from 'web3';

//### Setting network to Matic
const mumbaiNodeOptions = {
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  chainId: 80001,
};

export const magic = new Magic(
  'pk_live_xxx', 
  { network: mumbaiNodeOptions }
);
// magic.network = 'matic';

export const web3 = new Web3(magic.rpcProvider);