import React, { createContext, useContext, useState } from "react";

const authStore = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");

  const login = (usr) => {
    setUser(usr);
  };

  const logout = () => {
    setUser("");
  };

  return (
    <authStore.Provider value={{ user, setUser, login, logout }}>
      {children}
    </authStore.Provider>
  );
};

export const useCustomAuth=()=>{
  return useContext(authStore)
}

