import React, { useEffect, useReducer, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GenericInput } from "../../../actions/GenericInput";
import {
  DISTRICT_OPTIONS,
  STATE_OPTIONS,
  BANK_OPTIONS,
  BRANCH_OPTIONS,
} from "../../../actions/loanActions/GlobalLoanOptions";
import { GlobalApplicationDetailsReducers } from "../../../reducers/GlobalApplicationDetailsReducers";
import { GlobalInitialState } from "../../../reducers/GlobalInitialState";
import { BUTTON_TYPE } from "../../buttons/Constant";
import { GenericButton } from "../../buttons/GenericButton";
import {
  AccountValidation,
  BankValidation,
  BranchValidation,
  ConfirmAccountValidation,
  DistrictValidation,
  StateNameValidation,
} from "../../validations/Validations";
import { basicAccountServices } from "../../../services/loanApplicationServices/AccountServices";

const AccountDetails = ({ onSaveAndContinue }) => {
  const [state, dispatch] = useReducer(
    GlobalApplicationDetailsReducers,
    GlobalInitialState,
  );
  const { form, errors } = state;
  const [bankDetails, setBankDetails] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        const userData = JSON.parse(storedUser);
        setBankDetails(userData);
      } catch (err) {
        console.error("Invalid bank details:", err);
        localStorage.removeItem("user");
      }
    }
  },[]);
  const validationForm = (form) => {
    return {
      stateName: StateNameValidation(form.stateName),
      district: DistrictValidation(form.district),
      bank: BankValidation(form.bank),
      branch: BranchValidation(form.branch),
      accountNumber: AccountValidation(form.accountNumber),
      confirmAccountNumber: ConfirmAccountValidation(
        form.accountNumber,
        form.confirmAccountNumber,
      ),
    };
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validationForm(form);
    const hasError = Object.values(validationError).some(
      (error) => error !== "",
    );
    if (hasError) {
      dispatch({ type: "SET_ERRORS", payload: validationError });
      return;
    }
    try {
      const payload = {
        state_name: form.stateName,
        district: form.district,
        bank_name: form.bank,
        branch_name: form.branch,
        account_number: form.accountNumber,
      };
      const response = await basicAccountServices(payload);
      console.log("response:", response.data);
      alert("Account details saved successfully!");
      onSaveAndContinue();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          err.message ||
          "Failed to save account details!",
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3 p-2">
        <h6 className="bg-info p-1 border">Account Details</h6>
        <Row md={12}>
          <Col md={3}>
            <GenericInput
              label="State"
              name="stateName"
              type="select"
              value={form.stateName}
              onChange={handleChange}
              options={STATE_OPTIONS}
              error={errors.stateName}
              required={true}
            />
          </Col>
          <Col md={3}>
            <GenericInput
              label="District"
              name="district"
              type="select"
              value={form.district}
              onChange={handleChange}
              options={DISTRICT_OPTIONS}
              error={errors.district}
              required={true}
            />
          </Col>
            {bankDetails && (
              <>
            <Col md={3}>
            <GenericInput
              label="Bank"
              name="bank"
              type="text"
              value={bankDetails.bankName}
              onChange={handleChange}
              options={BANK_OPTIONS}
              // error={errors.bank}
              required={true}
              readOnly={true}
            />
          </Col>
          <Col md={3}>
            <GenericInput
              label="Branch"
              name="branch"
              type="text"
              value={bankDetails.branchName}
              onChange={handleChange}
              options={BRANCH_OPTIONS}
              // error={errors.branch}
              required={true}
              readOnly={true}
            />
          </Col>
          </>
          )}
          
          
          <Col md={3}>
            <GenericInput
              label="Account Number"
              name="accountNumber"
              type="text"
              value={form.accountNumber}
              onChange={handleChange}
              error={errors.accountNumber}
              required={true}
            />
          </Col>
          <Col md={3}>
            <GenericInput
              label="Confirm Account Number"
              name="confirmAccountNumber"
              type="text"
              value={form.confirmAccountNumber}
              onChange={handleChange}
              error={errors.confirmAccountNumber}
              required={true}
            />
          </Col>
        </Row>
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

export default AccountDetails;
