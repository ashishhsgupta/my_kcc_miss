export const FARMER_TYPE = {
    small:1,
    marginal:2,
    other:3,
}
export const getFarmerTypeId = (farmerType)=>{
    const farmerTypeKey = String(farmerType || "").trim().toLowerCase();
    return FARMER_TYPE[farmerTypeKey];
}