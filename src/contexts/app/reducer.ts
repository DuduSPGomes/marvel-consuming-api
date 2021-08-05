import { AppAction } from './actionTypes'
import { initialState } from './initial-state'
import * as types from './types'

export const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case types.SET_CHARACTERS:
      return { ...state, characters: action.payload }

    default:
      return state
  }
}
