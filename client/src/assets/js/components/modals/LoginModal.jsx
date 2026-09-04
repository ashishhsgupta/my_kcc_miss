import React, { useState } from "react";
import GlobalModal from "./GlobalModal";
import { Col, Row } from "react-bootstrap";
import { GenericButton } from "../buttons/GenericButton";
import { BUTTON_TYPE } from "../buttons/Constant";
import LoginForm from "../formFields/LoginForm";

const LoginModal = React.memo((props) => {
  const { show, onCloseBtn, onLoginBtn } = props;
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleModeChange = () => {
    setIsLoginMode((prev) => !prev);
  };

  return (
    <div>
      <GlobalModal
        show={show}
        title={
          isLoginMode ? "Login with registered mobile number" : "Registration"
        }
        btnName={isLoginMode ? "Login" : "Submit"}
        btnCallBack={onLoginBtn}
        onCloseBtn="Cancel"
        onHide={onCloseBtn}
      >
        <div>
          <LoginForm
            isLoginMode={isLoginMode}
            onModeChange={handleModeChange}
            onRegistrationSuccess={onCloseBtn}
          />
        </div>
      </GlobalModal>
    </div>
  );
});

export default LoginModal;
