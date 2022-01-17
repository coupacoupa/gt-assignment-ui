import { IUser } from 'common/types/user';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IContext {
  currentUser: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser>>;
}

interface IProvider {
  children: JSX.Element;
}

const UserContext = createContext<IContext>({
  currentUser: { email: undefined, contactNumber: undefined },
  setCurrentUser: () => {},
});

export const UserProvider = (props: IProvider) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState<IUser>({ email: undefined, contactNumber: undefined });

  return <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
