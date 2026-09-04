import React, { useReducer } from "react";
import GlobalModal from "./GlobalModal";
import { GenericInput } from "../../actions/GenericInput";
import { Col, Row } from "react-bootstrap";
import { initialState } from "../../reducers/RegistrationReducer";
import { GenericButton } from "../buttons/GenericButton";
import { BUTTON_TYPE } from "../buttons/Constant";
import { AadharValidation, FinancialYears } from "../validations/Validations";
import { LOAN_APPLICATION_FORM_PATH } from "../../globalRouters/routers/RouterConstant";
import { useNavigate } from "react-router-dom";

export const AadhaarNFyFetchModal = (props) => {
  const navigate = useNavigate();
  const { show, onHide } = props;

  const [state, dispatch] = useReducer(aadharReducer, initialState);
  const { form, errors } = state;

  const validationForm = (form) => {
    return {
      aadharNumber: AadharValidation(form.aadharNumber),
      financialYear: FinancialYears(form.financialYear),
    };
  };
  const financialYears = [
    { value: "2024-25", label: "2024-25" },
    { value: "2025-26", label: "2025-26" },
  ];
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "aadharNumber") {
      value = value.replace(/\D/g, "").slice(0, 12);
    }
    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validationForm(form);
    const hasError = Object.values(validationError).some(
      (error) => error !== "",
    );
    if (hasError) {
      dispatch({ type: "SET_ERRORS", payload: validationError });
      return;
    }
    alert("aadhar fetched successfully!");
    dispatch({type:"RESET_FORM"})
     onHide();
    navigate(LOAN_APPLICATION_FORM_PATH);
  
  };
  return (
    <GlobalModal
      show={show}
      onHide={onHide}
      title="fetch the records by aadhar number"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <Row md={12}>
            <Col md={12}>
              <GenericInput
                label="Financial year"
                type="select"
                name="financialYear"
                value={form.financialYear}
                onChange={handleChange}
                error={state.errors.financialYear}
                options={financialYears}
                required={true}
              />
            </Col>
            <Col>
              <GenericInput
                label="Aadhar No."
                type="text"
                name="aadharNumber"
                value={form.aadharNumber}
                onChange={handleChange}
                error={state.errors.aadharNumber}
                required={true}
                maxLength={12}
                inputMode="numeric"
              />
            </Col>
          </Row>
          <GenericButton
            type={BUTTON_TYPE.GREEN_BTN}
            htmlType="submit"
            btnTitle="Submit"
          />
        </form>
      </div>
    </GlobalModal>
  );
};
export const aadharReducer = (state, action) => {
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
