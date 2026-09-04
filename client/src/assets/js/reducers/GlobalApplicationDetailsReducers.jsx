import { GlobalInitialState } from "./GlobalInitialState";

export const GlobalApplicationDetailsReducers = (state,action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
        error: {
          ...state.error,
          [action.payload.name]: "",
        },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "RESET_FORM":
      return GlobalInitialState;
      default : return state;
  }
};
