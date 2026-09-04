import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AfterLoginDefaultLayout.css";
import { GenericButton } from "../buttons/GenericButton";
import { BUTTON_TYPE } from "../buttons/Constant";
import { GenericInput } from "../../actions/GenericInput";

const DashboardLayout = () => {
  const FYs = [
    { value: "25-26", label: "25-26" },
    { value: "24-25", label: "24-25" },
  ];
  const handleApprove = () => {
    console.log("approve btn");
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h4 className="mb-0">
          Welcome to <i>Interest Subvention Scheme</i>
        </h4>

        <div className="ms-auto">
          <GenericInput
            label="Financial Year:"
            type="select"
            name="FY"
            options={FYs}
          />
        </div>
      </div>
      <div className="bg-light p-4 border rounded m-2">
        <Row className="g-4">
          <Col md={6}>
            <div className="status-card approved">
              <div className="status-count">120</div>
              <small>No. of application already</small>
              <div className="status-title">Approved</div>
              <div>
                <GenericButton
                  type={BUTTON_TYPE.PURPLE_BTN}
                  btnTitle="View details"
                  onClick={handleApprove}
                />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="status-card submitted">
              <div className="status-count">85</div>
              <small>No. of application pending for </small>
              <div className="status-title">Approval</div>
              <div>
                <GenericButton
                  type={BUTTON_TYPE.PURPLE_BTN}
                  btnTitle="View details"
                  onClick={handleApprove}
                />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="status-card draft">
              <div className="status-count">32</div>
              <small>No. of application</small>
              <div className="status-title">Draft</div>
              <div>
                <GenericButton
                  type={BUTTON_TYPE.PURPLE_BTN}
                  btnTitle="View details"
                  onClick={handleApprove}
                />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="status-card rejected">
              <div className="status-count">15</div>
              <small>No. of application</small>
              <div className="status-title">Rejected</div>
              <div>
                <GenericButton
                  type={BUTTON_TYPE.PURPLE_BTN}
                  btnTitle="View details"
                  onClick={handleApprove}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardLayout;
