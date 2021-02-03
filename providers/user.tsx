import React, {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";

const UserCtx = createContext(null);

export const useUser = () => {
  const { user } = useContext(UserCtx);

  return { user };
};

const Provider: FunctionComponent = ({ children }) => {
  // const [loading, setLoading] = useState();
  const [user, setUser] = useState();

  const {
    query: { userId },
  } = useRouter();

  const getUser = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    setUser(user);
  };

  // on load, userId change
  useEffect(() => {
    if (userId) getUser(Number(userId));
  }, [userId]);

  return (
    <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>
  );
};

export default Provider;
