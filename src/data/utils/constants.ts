import CryptoJs from 'crypto-js'

export const baseURL = 'http://gateway.marvel.com/v1/public'

const timestamp = new Date().getTime()

const private_key = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY
const public_key = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY

const hash = CryptoJs.MD5(timestamp + private_key + public_key)

const authentication = `?ts=${timestamp}&apikey=${public_key}&hash=${hash.toString()}`

export const charactersRouter = `/characters${authentication}`
