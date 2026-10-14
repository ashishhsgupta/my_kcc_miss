export const GENDER = {
    mr:1,
    mrs:2,
    others:3,
}
export const getGenderId = (gender)=>{
    const genderKey = String(gender || "").trim().toLowerCase();
    return GENDER[genderKey];
};