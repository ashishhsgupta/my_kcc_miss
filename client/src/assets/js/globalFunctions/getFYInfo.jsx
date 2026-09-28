import { useState, useEffect } from "react";
import { getFYs } from "../services/loanApplicationServices/bankService";

export const useFYInfo = () => {
  const [fyList, setFyList] = useState([]);

  useEffect(() => {
    const fetchFy = async () => {
      try {
        const response = await getFYs();
        if (response.success) {
          setFyList(response.data);
        }
      } catch (err) {
        alert("Error while fetch FY!");
      }
    };
     fetchFy();
  }, []);

  const fyOptions = fyList.map((fy) => ({
    value: fy.fy_code,
    label: fy.fy_name,
  }));
  return fyOptions;
};
