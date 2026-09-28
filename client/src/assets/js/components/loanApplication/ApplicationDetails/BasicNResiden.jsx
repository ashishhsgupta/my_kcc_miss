import React, { useReducer } from "react";
import { GenericButton } from "../../buttons/GenericButton";
import { BUTTON_TYPE } from "../../buttons/Constant";
import { GlobalApplicationDetailsReducers } from "../../../reducers/GlobalApplicationDetailsReducers";
import { GlobalInitialState } from "../../../reducers/GlobalInitialState";
import { FarmerPersonalDetailsValidation } from "../../validations/FarmerPersonalDetailsValidation";
import FarmerPersonalDetails from "./FarmerPersonalDetails";
import ResidendialDetails from "./ResidendialDetails";
import { basicLoanServices } from "../../../services/loanApplicationServices/AccountServices";

const BasicNResiden = ({ onSaveAndContinue }) => {
  const [state, dispatch] = useReducer(
    GlobalApplicationDetailsReducers,
    GlobalInitialState,
  );
  const { form, errors } = state;

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = FarmerPersonalDetailsValidation(form);
    const hasError = Object.values(validationErrors).some(
      (error) => error !== "",
    );
    if (hasError) {
      dispatch({ type: "SET_ERRORS", payload: validationErrors });
      return;
    }
    try{
     const response = await basicLoanServices(form);
     alert(response.data?.message|| "Application Details saved successfully!");
       onSaveAndContinue();
    }catch(error){
      alert(error.response?.data?.message || error.message || "Failed to save application details!")
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3 p-2">
        <h6 className="bg-info p-1 border">Personal Details</h6>
        <FarmerPersonalDetails
          form={form}
          errors={errors}
          dispatch={dispatch}
        />
        <h6 className="bg-info p-1 border">Residendial Address</h6>
        <ResidendialDetails form={form} errors={errors} dispatch={dispatch} />
      </div>
      <div className="d-flex justify-content-between px-4 pb-4">
        <GenericButton
          type={BUTTON_TYPE.BACK_BTN}
          htmlType="button"
          btnTitle="BAck"
        />
        <GenericButton
          type={BUTTON_TYPE.GREEN_BTN}
          htmlType="submit"
          btnTitle="Save & Continue"
        />
      </div>
    </form>
  );
};

export default BasicNResiden;
