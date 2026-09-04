import { Col, Row } from "react-bootstrap";
import {
  DISTRICT_OPTIONS,
  STATE_OPTIONS,
  SUBDISTRICT_OPTIONS,
  VILLAGE_OPTIONS,
} from "../../../actions/loanActions/GlobalLoanOptions";
import { GenericInput } from "../../../actions/GenericInput";


const ResidendialDetails = ({form, errors, dispatch}) => {
 
  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };
  return (
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
      <Col md={3}>
        <GenericInput
          label="Sub-district"
          name="subDistrict"
          type="select"
          value={form.subDistrict}
          onChange={handleChange}
          options={SUBDISTRICT_OPTIONS}
          error={errors.subDistrict}
          required={true}
        />
      </Col>
      <Col md={3}>
        <GenericInput
          label="Village"
          name="village"
          type="select"
          value={form.village}
          onChange={handleChange}
          options={VILLAGE_OPTIONS}
          error={errors.village}
          required={true}
        />
      </Col>
      <Col md={9}>
        <GenericInput
          label="Address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          error={errors.address}
          required={true}
        />
      </Col>
      <Col md={3}>
        <GenericInput
          label="Pin Code"
          name="pinCode"
          type="text"
          value={form.pinCode}
          onChange={handleChange}
          error={errors.pinCode}
          required={true}
        />
      </Col>
    </Row>
  );
};

export default ResidendialDetails;
