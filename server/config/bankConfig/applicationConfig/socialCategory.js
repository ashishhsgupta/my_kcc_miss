export const SOCIAL_CATEGORY = {
    gen:1,
    obc:2,
    sc:3,
    st:4,
}
export const getSocialCategoryId = (socialCategory)=>{
    console.log("INPUT SOCIAL CATEGORY:", socialCategory);
    const socialCategoryKey = String(socialCategory || "").trim().toLowerCase();
      console.log("SOCIAL CATEGORY KEY:", socialCategoryKey);
  console.log("SOCIAL CATEGORY ID:", SOCIAL_CATEGORY[socialCategoryKey]);
    return SOCIAL_CATEGORY[socialCategoryKey]
}
console.log("SOCIAL CATEGORY CONFIG:", SOCIAL_CATEGORY);
console.log("TEST GEN:", getSocialCategoryId("GEN"));
console.log("TEST gen:", getSocialCategoryId("gen"));