import React, { createContext, useReducer } from 'react';
import { reducer, ACTIONS } from './reducer';

export const initialState = {
  data: [],
};

export const GlobalContext = createContext<any>(initialState as any);

export function GlobalProvider({ children }: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setData(data: string[]): void {
    dispatch({
      type: ACTIONS.SET_DATA,
      payload: {
        data,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
