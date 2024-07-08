import React from "react";
// actions
import { USER_CONTEXT_ACTIONS } from "./action.types";

// ActionMap utility type
type ActionMap<M extends Record<string, any>> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

// User Context Action Payload type definition
type UserContextActionPayloadType = {
  [USER_CONTEXT_ACTIONS.UPDATE_USER_DATA]: {
    payload: {
      business_name: string;
      name: string;
      email: string;
      phone: string;
    };
  };
};

// User Context Action types
export type UserContextActionType =
  ActionMap<UserContextActionPayloadType>[keyof UserContextActionPayloadType];

export type UserContextType = {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  dispatch: React.Dispatch<UserContextActionType>;
};
