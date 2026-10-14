export const RELATIVE_TYPE = {
    son_of:1,
    daugther_of:2,
    care_of:3,
    wife_of:4,
}
export const getRelativeTypeId = (relativeType) => {
    const relativeTypeKey = String(relativeType || "").trim().toLowerCase().replace(/\s+/g, "_");
    return RELATIVE_TYPE[relativeTypeKey]
};