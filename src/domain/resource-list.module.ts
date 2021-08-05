import { Character } from './character.model'

export interface ResourceList {
  avaiable: number
  returned: number
  collectionURI: string
  items: Character[]
}
