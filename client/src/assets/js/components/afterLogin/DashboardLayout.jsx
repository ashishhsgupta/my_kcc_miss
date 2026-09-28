import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AfterLoginDefaultLayout.css";
import { GenericButton } from "../buttons/GenericButton";
import { BUTTON_TYPE } from "../buttons/Constant";
import { GenericInput } from "../../actions/GenericInput";
import { useEffect } from "react";
import { useState } from "react";
import { useFYInfo } from "../../globalFunctions/getFYInfo";

const DashboardLayout = () => {
  const [bankDetails, setBankDetails] = useState(null);
  const fyOptions = useFYInfo();

  const handleApprove = () => {
    console.log("approve btn");
  };
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        try {
          const userData = JSON.parse(storedUser);
          setBankDetails(userData);
        } catch (err) {
          console.error("Invalid user data:", err);
          localStorage.removeItem("user");
        }
      }
    }, []);

  return (
    <>
      <div className="d-flex align-items-center">
        <h4 className="mb-0">
          {bankDetails && (
            <>
            <span>Welcome {bankDetails.bankName}-<small>({bankDetails.branchName}-{bankDetails.branchId})</small></span>
          </>
          )}
        </h4>

        <div className="ms-auto">
          <GenericInput
            label="Financial Year:"
            type="select"
            name="FY"
            options={fyOptions}
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
