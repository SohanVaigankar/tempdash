import { USER_CONTEXT_ACTIONS } from "./action.types";
// types
import { UserContextType, UserContextActionType } from "./interface";

const UserContextReducer = (
  state: UserContextType,
  action: UserContextActionType
) => {
  switch (action.type) {
    case USER_CONTEXT_ACTIONS.UPDATE_USER_DATA:
      return {
        ...state,
        ...action.payload,
        businessName: action.payload.business_name,
      };

    default:
      return state;
  }
};

export default UserContextReducer;
