import { ResourceList } from './resource-list.module'
import { URLs } from './urls.model'
import { Image } from './image.model'

export interface Character {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: URLs[]
  thumbnail: Image
  comics: ResourceList
  stories: ResourceList
  events: ResourceList
  series: ResourceList
}
