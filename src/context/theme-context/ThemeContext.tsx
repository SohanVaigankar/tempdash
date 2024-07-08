import { createContext, useContext, useEffect, useReducer } from "react";
// reducer
import ThemeContextReducer from "./ThemeContextReducer";
// utils, constants & helper functions
import { THEMES } from "../../utils/constants";
// types & props
import { ThemeContextType } from "./interface";

const initialState = {
  currentTheme: localStorage.getItem("theme") ?? "light",
  dispatch: (arg: any) => arg,
};

// creating theme context
const ThemeContext = createContext<ThemeContextType>(initialState);

// context provider
export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [state, dispatch] = useReducer(ThemeContextReducer, initialState);

  useEffect(() => {
    // add dark class to DOM if theme is dark otherwise remove
    if (state.currentTheme) {
      localStorage.setItem("theme", state.currentTheme);

      const root = document.getElementById("root");
      if (state.currentTheme === THEMES.DARK) {
        root.classList.add(THEMES.DARK);
      } else {
        root.classList.remove(THEMES.DARK);
      }
    }
  }, [state.currentTheme]);

  const values = {
    currentTheme: state.currentTheme,
    dispatch,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

// consuming theme context
export const useThemeContext = () => useContext(ThemeContext);
