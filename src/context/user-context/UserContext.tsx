import { createContext, useContext, useReducer } from "react";
// reducer
import UserContextReducer from "./UserContextReducer";

// types & props
import { UserContextType } from "./interface";

const initialState = {
  businessName: "Superstars AI",
  name: "Sohan Vaigankar",
  email: "svaigankar2000@gmail.com",
  phone: "9999999999",
  dispatch: (arg: any) => arg,
};

// creating theme context
const UserContext = createContext<UserContextType>(initialState);

// context provider
export const UserContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(UserContextReducer, initialState);

  const values = {
    ...state,
    dispatch,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// consuming user context
export const useUserContext = () => useContext(UserContext);
