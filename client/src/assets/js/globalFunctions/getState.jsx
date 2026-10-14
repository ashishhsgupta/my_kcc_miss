import { useState } from "react";
import { getStates } from "../services/loanApplicationServices/bankService.js";
import { useEffect } from "react";

export const getStateInfo = () => {
  const [stateName, setStateName] = useState([]);

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await getStates();
        if (response.success) {
          setStateName(response.data);
        }
      } catch (err) {
        console.error("Error while fetching state:", err.message);
      }
    };
    fetchState();
  }, []);
  const stateOptions = stateName.map((state) => ({
    value: state.stateId,
    label: state.stateName,
  }));
  return stateOptions;
};
