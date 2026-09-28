import { Col, Row } from "react-bootstrap";
import { GenericInput } from "../../../actions/GenericInput";
import {
  FARMER_CATEGORY,
  FARMER_TYPE,
  GENDER_OPTIONS,
  PRIMARY_OCCUPATION,
  RELATIVE_TYPE,
  SOCIAL_CATEGORIES,
} from "../../../actions/loanActions/GlobalLoanOptions";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const FarmerPersonalDetails = ({ form, errors, dispatch }) => {
  const location = useLocation();
  const aadharNumber = location.state?.aadharNumber || "";

  useEffect(() => {
    if (aadharNumber && !form.aadharNumber) {
      dispatch({
        type: "CHANGE_INPUT",
        payload: {
          name: "aadharNumber",
          value: aadharNumber,
        },
      });
    }
  }, [aadharNumber, form.aadharNumber, dispatch]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "aadharNumber") {
      value = value.replace(/\D/g, "").slice(0, 12);
    }
    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };
  return (
    <Row md={12}>
      <Col md={4}>
        <GenericInput
          label="Beneficiary Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter Beneficiary name"
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Aadhar Number"
          name="aadharNumber"
          value={form.aadharNumber}
          onChange={handleChange}
          error={errors.aadharNumber}
          placeholder="Enter Aadhar no."
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Name As Per Passbook"
          name="passbookName"
          value={form.passbookName}
          onChange={handleChange}
          error={errors.passbookName}
          placeholder="Enter passbook name"
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Date of Birth"
          name="DOB"
          value={form.DOB}
          onChange={handleChange}
          error={errors.DOB}
          placeholder="Enter Beneficiary DOB"
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Gender"
          name="gender"
          type="select"
          value={form.gender}
          onChange={handleChange}
          error={errors.gender}
          options={GENDER_OPTIONS}
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Enter Mobile no."
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          error={errors.mobile}
          placeholder="Enter mobile No."
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Social Category"
          name="socialCategory"
          type="select"
          value={form.socialCategory}
          onChange={handleChange}
          options={SOCIAL_CATEGORIES}
          error={errors.socialCategory}
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Farmer Category"
          name="farmerCategory"
          type="select"
          value={form.farmerCategory}
          onChange={handleChange}
          options={FARMER_CATEGORY}
          error={errors.farmerCategory}
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Farmer Type"
          name="farmerType"
          type="select"
          value={form.farmerType}
          onChange={handleChange}
          options={FARMER_TYPE}
          error={errors.farmerType}
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Primary Occupation"
          name="primaryOccupation"
          value={form.primaryOccupation}
          onChange={handleChange}
          options={PRIMARY_OCCUPATION}
          error={errors.primaryOccupation}
          type="select"
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Relative Type"
          name="relativeType"
          value={form.relativeType}
          onChange={handleChange}
          options={RELATIVE_TYPE}
          error={errors.relativeType}
          type="select"
          required={true}
        />
      </Col>
      <Col md={4}>
        <GenericInput
          label="Relative Name"
          name="relativeName"
          value={form.relativeName}
          onChange={handleChange}
          error={errors.relativeName}
          placeholder="Enter relative name"
          required={true}
        />
      </Col>
    </Row>
  );
};

export default FarmerPersonalDetails;
