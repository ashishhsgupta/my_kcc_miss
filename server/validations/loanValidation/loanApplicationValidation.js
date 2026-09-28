export const validationRequireFields = (data, requiredFields) => {
  const missingFields = requiredFields.filter(
    (field) =>
      data[field] === undefined ||
      data[field] === null ||
      String(data[field]).trim() === "",
  );
  if (missingFields.length > 0) {
    throw new Error(
      `The following fields are required:${missingFields.join(", ")}`,
    );
  }
  return true;
};
