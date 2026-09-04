import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import '../loanApplication/loanApplicationStyle.css';
import BasicNResiden from "./ApplicationDetails/BasicNResiden";
import AccountDetails from "./AccountDetails/AccountDetails";

const LoanApplication = () => {
  const [activeTab, setActiveTab] = useState("basic-details");
  const [completedTabs, setCompletedTabs] = useState(["basic-details"]);

  const tabList = [
    "basic-details",
    "account-details",
    "financial-details",
    "activity-details",
    "term-loan-details",
  ];
  const handleSaveAndContinue = (currentTab) => {
    const currentIndex = tabList.indexOf(currentTab);
    const nextTab = tabList[currentIndex + 1];

    if (!nextTab) {
      return;
    }
    setCompletedTabs((prev) => {
      if (prev.includes(nextTab)) {
        return prev;
      }
      return [...prev, nextTab];
    });
    setActiveTab(nextTab);
  };
  const handleTabChange = (key) => {
    if (!completedTabs.includes(key)) {
      return;
    }
    setActiveTab(key);
  };

  return (
    <div className="border rounded m-3">
      <div className="p-2">
        <h5>Application Form (FY - 2024-25)</h5>
      </div>
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabChange}
        className="custom-tabs fw-semibold bg-light"
      >
        <Tab eventKey="basic-details" title="Application Details">
          <BasicNResiden
            onSaveAndContinue={() => handleSaveAndContinue("basic-details")}
          />
        </Tab>
        <Tab
          eventKey="account-details"
          title="Account Details"
          disabled={!completedTabs.includes("account-details")}
        >
          <AccountDetails onSaveAndContinue={()=> handleSaveAndContinue("account-details")}/>
        </Tab>
        <Tab eventKey="financial-details" title="Financial Details">
          <h4>financial form</h4>
        </Tab>
        <Tab eventKey="activity-details" title="Activities (Multi-Select)">
          <h4>activity form</h4>
        </Tab>
        <Tab eventKey="term-loan-details" title="Term Loan Details">
          <h4>term loan form</h4>
        </Tab>
      </Tabs>
    </div>
  );
};

export default LoanApplication;
