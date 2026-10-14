export const getBanksByStateAndDistrict = (stateId, districtId) => {
  const banks = [];

  for (const bankTypeDetails of Object.values(BANK_CONFIG)) {
    for (const bankDetails of Object.values(bankTypeDetails.banks)) {

      // Check State
      if (
        bankDetails.state.stateId !== Number(stateId)
      ) {
        continue;
      }

      // Check whether bank has branch in selected district
      const hasDistrict = bankDetails.branches.some(
        (branch) =>
          branch.district.districtId === Number(districtId)
      );

      if (hasDistrict) {
        banks.push({
          bankId: bankDetails.bankId,
          bankName: bankDetails.bankName,
          bankType: bankTypeDetails.label,
        });
      }
    }
  }

  return banks;
};