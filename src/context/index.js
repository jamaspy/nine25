import React, { createContext, useReducer } from "react";

export const ModalContext = createContext();

const initialState = {
  showModal: false,
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { showModal: true };
    case "HIDE_MODAL":
      return { showModal: false };
    default:
      return state;
  }
};

export function ModalProvider(props) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ModalContext.Provider>
  );
}
