import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase/client";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(true);
      } else {
        setUser(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
