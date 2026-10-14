import { BANK_CONFIG } from "../../config/bankConfig/bankConfiguration.js";

export const getStateService = () => {
  const states = [];

  for (const bankTypeDetails of Object.values(BANK_CONFIG)) {
    for (const bankDetails of Object.values(bankTypeDetails.banks)) {
      const state = bankDetails.state;
      if (!states.some((item) => item.stateId === state.stateId)) {
        states.push({ stateId: state.stateId, stateName: state.stateName });
      }
    }
  }
  return states;
};
