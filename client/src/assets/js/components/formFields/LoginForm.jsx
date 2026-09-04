import React, { useReducer, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GenericInput } from "../../actions/GenericInput";
import { formReducer, initialState } from "../../reducers/RegistrationReducer";
import { GenericButton } from "../buttons/GenericButton";
import { BUTTON_TYPE } from "../buttons/Constant";
import {
  ConfirmPasswordValidation,
  EmailValidation,
  MobileValidation,
  NameValidation,
  PasswordValidation,
  RoleValidation,
} from "../validations/Validations";
import { loginUser, registerUser } from "../../services/UserServices.js";
import { DASHBOARD_PATH } from "../../globalRouters/routers/RouterConstant.jsx";

const LoginForm = ({ onRegistrationSuccess, isLoginMode, onModeChange }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { form, errors } = state;
  const navigate = useNavigate("");

  const validationForm = (form) => {
    if (isLoginMode) {
      return {
        mobile: MobileValidation(form.mobile),
        password: PasswordValidation(form.password),
      };
    }
    return {
      name: NameValidation(form.name),
      email: EmailValidation(form.email),
      mobile: MobileValidation(form.mobile),
      role: RoleValidation(form.role),
      password: PasswordValidation(form.password),
      confirmPassword: ConfirmPasswordValidation(
        form.password,
        form.confirmPassword,
      ),
    };
  };

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "mobile") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }
    dispatch({
      type: "CHANGE_INPUT",
      payload: {name, value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validationForm(form);
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== "",
    );
    if (hasErrors) {
      dispatch({ type: "SET_ERRORS", payload: validationErrors });
      return;
    }
    try {
      if (isLoginMode) {
        const response = await loginUser(form);
        localStorage.setItem("user", JSON.stringify(response.data))
        alert(response.data.message || "Login successfully!");
        navigate(DASHBOARD_PATH);
      } else {
        const response = await registerUser(form);
        if(response.data?.data){
        localStorage.setItem("registerUser", JSON.stringify(response.data));
        }
        
        alert(response.data.message || "Registration successfully!");
        onRegistrationSuccess();
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="lh-sm fw-medium">
      <form onSubmit={handleSubmit}>
        <Row md={12}>
          {!isLoginMode && (
            <>
              <Col>
                <GenericInput
                  label="Name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Enter name"
                  required={true}
                />
              </Col>
              <Col md={12}>
                <GenericInput
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="Enter email"
                  required={true}
                />
              </Col>
            </>
          )}
          <Col md={12}>
            <GenericInput
              label="Mobile Number"
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              maxLength={name === "mobile" ? 10 : undefined}
              inputMode={name === "mobile" ? "numeric" : undefined}
              error={errors.mobile}
              placeholder="Enter mobile number"
              required={true}
            />
          </Col>
          {!isLoginMode && (
            <>
              <Col>
                <GenericInput
                  label="Role"
                  type="select"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  error={errors.role}
                  options={roles}
                  required={true}
                />
              </Col>
            </>
          )}
          <Col md={12}>
            <GenericInput
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Enter password"
              required={true}
            />
          </Col>
          {!isLoginMode && (
            <>
              <Col md={12}>
                <GenericInput
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  placeholder="Enter confirm password"
                  required={true}
                />
              </Col>
            </>
          )}
          <div className="text-end">
            <button
              type="button"
              className="btn btn-link"
              onClick={onModeChange}
            >
              <i>
                {isLoginMode
                  ? "Don't have an account? Register"
                  : "If already registered? Login"}
              </i>
            </button>
          </div>
        </Row>
        <div className="text-center">
          <GenericButton
            type={BUTTON_TYPE.GREEN_BTN}
            htmlType="submit"
            btnTitle={isLoginMode ? "Login" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
