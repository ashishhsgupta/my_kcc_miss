import React, { useEffect, useReducer, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CLAIM_APPLICATION_PATH, CLAIM_RELEASE_SUMMARY_PATH, DASHBOARD_PATH, LOAN_APPLICATION_FORM_PATH } from "../../globalRouters/routers/RouterConstant";
import { AadhaarNFyFetchModal } from "../modals/AadhaarNFyFetchModal";

const initialState = { activeMenu: "dashboard" };
const FeatureMenuLists = (props) => {
  const {show, onCloseBtn} = props
  const [state, dispatch] = useReducer(menuReducer, initialState);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  const handleMenuClick =(e, menu)=>{
    e.preventDefault();
    dispatch({type:"SET_ACTIVE_MENU", payload:menu.id})
    switch(menu.id){
      case "dashboard": navigate(DASHBOARD_PATH)
      break;
      case "loan-application": setShowModal(true)
      break;
      case "claim-application":navigate(CLAIM_APPLICATION_PATH)
      break;
      case "claim-release-summary":navigate(CLAIM_RELEASE_SUMMARY_PATH)
      default : break;
    }
  }
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (err) {
        console.error("Invalid user data:", err);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const menus = [
    { id: "dashboard", label: "Dashboard", icon: "bi-speedometer2", path: DASHBOARD_PATH},
    {
      id: "loan-application",
      label: "Loan Application",
      icon: "bi-file-earmark-text",
      path: LOAN_APPLICATION_FORM_PATH,
    },
    {
      id: "claim-application",
      label: "IS/PRI Claim Application",
      icon: "bi-file-earmark-check",
      path: "#",
    },
    {
      id: "claim-release-summary",
      label: "Claim Release Summary",
      icon: "bi-file-earmark-bar-graph",
      path: CLAIM_RELEASE_SUMMARY_PATH,
    },
    {
      id: "pre-sanction-eligibility",
      label: "Pre Sanction Eligibility Check",
      icon: "bi-clipboard2-check",
      path: "#",
    },
    { id: "reports", label: "Reports", icon: "bi-bar-chart-line", path: "#" },
    { id: "saturation", label: "Saturation", icon: "bi-pie-chart", path: "#" },
    { id: "logout", label: "Logout", icon: "bi-box-arrow-right", path: "#" },
  ];
  
  return (
    <>
    <Nav className="menulist-items flex-column text-white p-2">
      <div className="d-flex gap-3 p-2 border-bottom">
        <i className="fa-solid fa-user fs-5"></i>
        {user && <p>Welcome: {user.name}</p>}
      </div>
      {menus.map((menu) => (
        <Nav.Link
          key={menu.id}
          href={menu.path}
          onClick={(e)=> handleMenuClick(e, menu)}
          className={`border-bottom d-flex align-items-center gap-1 lh-lg ${state.activeMenu === menu.id ? "active-menu" : ""}`}
        >
          <i className={`bi ${menu.icon}`}></i>
          <span className="">{menu.label}</span>
        </Nav.Link>
      ))}
    </Nav>
    <AadhaarNFyFetchModal show={showModal} onHide={()=>setShowModal(false)}/>
   </>
  );
};
const menuReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_MENU":
      return { ...state, activeMenu: action.payload };
    default:
      return state;
  }
};

export default FeatureMenuLists;
