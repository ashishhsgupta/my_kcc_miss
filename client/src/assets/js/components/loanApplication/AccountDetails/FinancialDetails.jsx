import React from "react";
import { Col, Row } from "react-bootstrap";
import { GenericInput } from "../../../actions/GenericInput";
import { BUTTON_TYPE } from "../../buttons/Constant";
import { GenericButton } from "../../buttons/GenericButton";

export const FinancialDetails = (form) => {
  const handleChange = () => {
    console.log("hi");
  };
  return (
    <form>
      <div className="m-3 p-2">
        <h6 className="bg-info p-1 border">Financial Details</h6>
        <Row md={12}>
          <Col md={4}>
            <GenericInput
              label="KCC loan saction/renewed on"
              name="kccSanctioned"
              type="date"
              value={form.kccSanctionDate}
              onChange={handleChange}
              errors={form.errors}
              required={true}
            />
          </Col>
          <Col md={4}>
            <GenericInput 
            label="KCC loan sanction as per SOF(INR)"
            name="kccSanctionAmt"
            type="text"
            value={form.kccSanctionAmt}
            onChange={form.kccSanctionAmt}
            error={form.errors}
            required={true}
            />
          </Col>
          <Col md={4}>
          <GenericInput 
           label="KCC drawing lomit for current FY(INR)"
           name="kccDrawingLimit"
           type="text"
           value={form.kccDrawingLimit}
           onChange={form.kccDrawingLimit}
           errors={form.errors}
           required={true}
          />
          </Col>
          <Col md={4}>
          <GenericInput label="KCC limit tenure (months)" required={true}/>
          </Col>
          <Col md={4}>
          <GenericInput label="Next KCC renewal on" required={true}/>
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
