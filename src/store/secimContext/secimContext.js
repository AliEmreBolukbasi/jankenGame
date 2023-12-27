import React, { createContext, useReducer, useContext } from 'react';

const SecimContext = createContext();

const secimReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_IMAGE':
      return (state + 1) % action.length;
    default:
      return state;
  }
};

export const SecimProvider = ({ children }) => {
  const [state, dispatch] = useReducer(secimReducer, 0);

  const nextImage = (length) => {
    dispatch({ type: 'NEXT_IMAGE', length });
  };

  return (
    <SecimContext.Provider value={{ secimIndex: state, nextImage }}>
      {children}
    </SecimContext.Provider>
  );
};

export const useSecim = () => {
  const context = useContext(SecimContext);
  if (!context) {
    throw new Error('useSecim must be used within a SecimProvider');
  }
  return context;
};
