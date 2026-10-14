export const getDistrictById = (districtId) => {
  for (const bankTypeDetails of Object.values(BANK_CONFIG)) {
    for (const bankDetails of Object.values(bankTypeDetails.banks)) {
      for (const branch of bankDetails.branches) {
        if (
          branch.district.districtId === Number(districtId)
        ) {
          return {
            districtId: branch.district.districtId,
            districtName: branch.district.districtName,
          };
        }
      }
    }
  }

  throw new Error("District not found!");
};