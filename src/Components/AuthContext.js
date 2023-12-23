// AuthContext.js
import { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log('Children is',children)
  const [users, setUsers] = useState(null);

  const login = (userData) => {
    setUsers(userData);
  };

  const logout = () => {
    setUsers(null);
  };

  return (
    <AuthContext.Provider value={{ users, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
