
export const initialState = {
    form: {
      name: "",
      email: "",
      mobile: "",
      role: "",
      password: "",
      confirmPassword: "",
      financialYear:"",
      aadharNumber:""
    },
    errors: {
      name:"",
      email:"",
      mobile:"",
      role:"",
      password:"",
      confirmPassword:"",
      financialYear:"",
      aadharNumber:""
    },
  };

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
        errors: {
          ...state.error,
          [action.payload.name]: "",
        },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};
