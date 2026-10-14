export const PRIMARY_OCCUPATION = {
  agriculture:1,
  horticulture:2,
  animal:3,
  fishery:4,
}
export const getPrimaryOccupationId = (primaryOccupation) => {
    const primaryOccupationKey = String(primaryOccupation || "").trim().toLocaleLowerCase();
    return PRIMARY_OCCUPATION[primaryOccupationKey];
}