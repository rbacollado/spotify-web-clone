import React, { createContext, useContext, useReducer } from "react";

/* prepares the data layer*/
export const StateContext = createContext();

/* sets initial state of the data layer to its children*/
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/* pull info from the data layer */
export const useStateValue = () => useContext(StateContext);
