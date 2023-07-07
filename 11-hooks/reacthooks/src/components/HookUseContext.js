import { createContext } from 'react';

export const SomeContext = createContext();

export const HookeUseContext = ({ children }) => {
  const contextValue = 'Teste context';

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};
