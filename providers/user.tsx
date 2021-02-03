import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from "react";

const UserCtx = createContext(null);

export const useUser = () => {
  const { user, setUser } = useContext(UserCtx);

  const getUser = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    setUser(user);
  };

  return { user, getUser };
};

const Provider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>
  );
};

export default Provider;
