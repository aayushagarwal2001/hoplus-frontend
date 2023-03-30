import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'

function getAccessToken () {
  return process.env.REACT_APP_WEB3STORAGE_TOKEN
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

const client = makeStorageClient()

export default client;