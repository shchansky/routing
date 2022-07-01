import React from "react";

export const AuthContext = React.createContext<null | any>(null);

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = React.useState<string | null>(null);

  const signIn = (newUser: string, callback: () => void) => {
    setUser(newUser);
    callback();
  };
  const signOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
