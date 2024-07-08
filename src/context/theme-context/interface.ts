import React from "react";
// actions
import { THEME_CONTEXT_ACTIONS } from "./action.types";
// utils & constants
import { THEMES } from "../../utils/constants";

// ActionMap utility type
type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

// Theme Context Action Payload type definition
type ThemeContextActionPayloadType = {
  [THEME_CONTEXT_ACTIONS.TOGGLE_THEME]: {
    payload: THEMES | string;
  };
};

// Theme Context Action types
export type ThemeContextActionType =
  ActionMap<ThemeContextActionPayloadType>[keyof ThemeContextActionPayloadType];

export type ThemeContextType = {
  currentTheme: THEMES;
  dispatch: React.Dispatch<ThemeContextActionType>;
};
