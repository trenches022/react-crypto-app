import { cryptoAssets, cryptoData } from './data'

export const fetchCrypto = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 1000);
  })
};

export const fetchAssets = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 1000);
  })
};