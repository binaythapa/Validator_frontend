import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "Sabil" }}>
      {children}
    </AuthContext.Provider>
  );
};
