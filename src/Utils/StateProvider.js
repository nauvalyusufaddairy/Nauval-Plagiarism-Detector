import React, { createContext, useContext, useReducer } from "react";

// persiapan untuk data layer
export const StateContext = createContext();

// bungkus aplikasi kita dan layani data layerr
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// tarik semua informasi dari data layer
export const useStateValue = () => useContext(StateContext);
