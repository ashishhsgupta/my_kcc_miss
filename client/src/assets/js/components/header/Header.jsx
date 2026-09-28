import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [bankDetails, setBankDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        const userData = JSON.parse(storedUser);
        setBankDetails(userData);
      } catch (err) {
        console.err("Invalid user data:", err);
        localStorage.removeItem("user");
      }
    }
  },[]);
  return (
    <div className="text-center p-3 border-bottom border-1 border-info bg-white fw-bold position-relative">
      MY-KCC (Kisan Credit Card)
      <br />
      <small>
        Ministry of Agriculture and farmer welfare (Government of India)
       
      </small>
        <small className="position-absolute end-0 top-50 translate-middle-y me-5">Role: {bankDetails?.roleName}</small>
       
    </div>
    
  );
};

export default Header;
