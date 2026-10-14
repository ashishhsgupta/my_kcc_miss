export const FARMER_CATEGORY = {
    owner:1,
    sharecropper:2,
    tenent:3,
}
export const getFarmerCategoryId = (farmerCategory)=>{
    const farmerCategoryKey = String(farmerCategory || "").trim().toLowerCase();
    return FARMER_CATEGORY[farmerCategoryKey]
}