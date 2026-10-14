export const getBranchesByStateDistrictAndBank = (
  stateId,
  districtId,
  bankId
) => {
  for (const bankTypeDetails of Object.values(BANK_CONFIG)) {
    for (const bankDetails of Object.values(bankTypeDetails.banks)) {

      if (
        bankDetails.bankId !== Number(bankId) ||
        bankDetails.state.stateId !== Number(stateId)
      ) {
        continue;
      }

      return bankDetails.branches
        .filter(
          (branch) =>
            branch.district.districtId === Number(districtId)
        )
        .map((branch) => ({
          branchId: branch.branchId,
          branchName: branch.branchName,
          districtId: branch.district.districtId,
          districtName: branch.district.districtName,
          bankId: bankDetails.bankId,
          bankName: bankDetails.bankName,
        }));
    }
  }

  return [];
};