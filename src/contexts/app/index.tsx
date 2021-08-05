import { createContext, useReducer } from 'react'
import { IAppInitialState, initialState } from './initial-state'
import { reducer } from './reducer'

interface IAppContextProps {
  state: IAppInitialState
  dispatch: ({ type }: { type: string }) => void
}

export const AppContext = createContext<IAppContextProps>(null)

export default function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
