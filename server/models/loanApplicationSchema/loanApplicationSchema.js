import { getDB } from "../../config/database.js";

export const saveApplicationDetailsSchema = async (applicationData) => {
  const db = getDB();
  const sql = `INSERT INTO application_details(creatorId, name,aadharNumber,passbookName,DOB,gender,mobile,
    socialCategory,farmerCategory,farmerType,primaryOccupation,
    relativeType,relativeName,stateName,district,
    subDistrict,village,address,pinCode) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const [result] = await db.execute(sql, [
    applicationData.creatorId,
    applicationData.name,
    applicationData.aadharNumber,
    applicationData.passbookName,
    applicationData.DOB,
    applicationData.gender,
    applicationData.mobile,
    applicationData.socialCategory,
    applicationData.farmerCategory,
    applicationData.farmerType,
    applicationData.primaryOccupation,
    applicationData.relativeType,
    applicationData.relativeName,
    applicationData.stateName,
    applicationData.district,
    applicationData.subDistrict,
    applicationData.village,
    applicationData.address,
    applicationData.pinCode
  ]);
  return result;
};
