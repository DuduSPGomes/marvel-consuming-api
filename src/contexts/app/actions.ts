import { Character } from 'domain/character.model'
import { action } from 'typesafe-actions'
import * as types from './types'

export function setCharacters(payload: Character[]) {
  return action(types.SET_CHARACTERS, payload)
}
