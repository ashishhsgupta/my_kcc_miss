import React from "react";
import { createBrowserRouter } from "react-router-dom";
//import DefaultLayout from "../../components/beforeLogin/DefaultLayout";
import Dashboard from "../../components/afterLogin/Dashboard.jsx";
import {CLAIM_APPLICATION_PATH, CLAIM_RELEASE_SUMMARY_PATH, DASHBOARD_PATH, LOAN_APPLICATION_FORM_PATH } from "./RouterConstant";
import BeforeLoginDefaultLayout from "../../components/beforeLogin/BeforeLoginDefaultLayout.jsx";
import Home from "../../components/beforeLogin/Home.jsx";
import AfterLoginDefaultLayout from "../../components/afterLogin/AfterLoginDefaultLayout.jsx";
import { ClaimReleaseSummary } from "../../components/claimReleaseSummary/ClaimReleaseSummary.jsx";
import { ClaimAppliocation } from "../../components/claimApplication/ClaimAppliocation.jsx";
import LoanApplication from "../../components/loanApplication/LoanApplication.jsx";
// import LoanApplication from "../../components/loanApplication/LoanApplication.jsx";
const RouterComponents = createBrowserRouter([
  {
    path: "/",
    element: <BeforeLoginDefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <AfterLoginDefaultLayout />,
        children: [
          {
            path: DASHBOARD_PATH,
            element: <Dashboard />,
          },
          {
            path: LOAN_APPLICATION_FORM_PATH,
            element: <LoanApplication />
          },
          {
            path:CLAIM_APPLICATION_PATH,
            element:<ClaimAppliocation />
          },
          {
            path:CLAIM_RELEASE_SUMMARY_PATH,
            element:<ClaimReleaseSummary />
          }
        ],
      },
    ],
  },
]);

export default RouterComponents;
