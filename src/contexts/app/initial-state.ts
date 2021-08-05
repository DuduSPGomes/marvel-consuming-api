import { Character } from 'domain/character.model'

export interface IAppInitialState {
  characters: Character[]
}

export const initialState: IAppInitialState = {
  characters: []
}
