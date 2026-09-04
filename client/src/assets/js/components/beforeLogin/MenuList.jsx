import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./beforeLoginStyle.css";
import FB from "../../images/F_B.png";
import YT from "../../images/yt.png";
import TW from "../../images/tw.png";
import { useReducer } from "react";
import LoginModal from "../modals/LoginModal";

const initialState = { activeMenu: "about", showLoginModal: false };
const MenuList = () => {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  const menus = [
    { id: "about", label: "About", icon: "bi-file-person" },
    { id: "login", label: "Login", icon: "bi-person-fill", action: "modal" },
    { id: "links", label: "Links", icon: "bi-archive-fill" },
    { id: "faqs", label: "FAQs", icon: "bi-bookmark-check-fill" },
  ];

  return (
    <>
      <Nav className="menulist-items flex-column rounded-start text-white p-3">
        {menus.map((menu) => (
          <Nav.Link
            key={menu.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "SET_ACTIVE_MENU", payload: menu.id });
              if (menu.id === "login") {
                dispatch({ type: "OPEN_LOGIN_MODAL" });
              }
            }}
            className={`text-white p-6 fs-5 ${state.activeMenu === menu.id ? "active-menu" : ""}`}
          >
            <i className={`bi ${menu.icon} fs-4`}></i>
            {menu.label}
          </Nav.Link>
        ))}
        <div className="p-4 mt-2 d-flex flex-column gap-3">
          <img src={FB} alt="logo" width={50} height={50} />
          <img src={YT} alt="logo" width={50} height={50} />
          <img src={TW} alt="logo" width={50} height={50} />
        </div>
      </Nav>
      <LoginModal
        show={state.showLoginModal}
        onCloseBtn={() => dispatch({ type: "CLOSE_LOGIN_MODAL" })}
        onLoginBtn={() => dispatch({ type: "CLOSE_LOGIN_MODAL" })}
      />
    </>
  );
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_MENU":
      return { ...state, activeMenu: action.payload };
    case "OPEN_LOGIN_MODAL":
      return { ...state, showLoginModal: true };
    case "CLOSE_LOGIN_MODAL":
      return { ...state, showLoginModal: false };
    default:
      return state;
  }
};

export default MenuList;
