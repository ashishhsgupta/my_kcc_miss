import React, { useState } from "react";
import GlobalModal from "./GlobalModal";
import LoginForm from "../formFields/LoginForm";

const LoginModal = React.memo((props) => {
  const { show, onCloseBtn } = props;
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
        // btnName={isLoginMode ? "Login" : "Submit"}
        // btnCallBack={onLoginBtn}
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
