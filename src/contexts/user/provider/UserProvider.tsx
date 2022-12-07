import { UserContext } from "../context/UserContext";
import { UserContextValue } from "../context/UserContext.model";
import { UserProviderProps } from "./UserProvider.model";
import { User } from "firebase/auth";
import { auth } from "src/firebase/config/firebase";
import { useState, useEffect, useMemo } from "react";

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  console.log("🚀  currentUser", currentUser)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: UserContextValue = useMemo(
    () => ({
      currentUser,
      pending: isLoading,
    }),
    [currentUser, isLoading]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
