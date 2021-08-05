import { Character } from './character.model'

export interface Container {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[] // aplicar tipagem dinâmica
}
