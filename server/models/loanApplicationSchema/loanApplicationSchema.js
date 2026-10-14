import { getDB } from "../../config/database.js";

export const saveApplicationDetailsSchema = async (applicationData) => {
  const db = getDB();
  const sql = `INSERT INTO application_basic_details(creator_id,
      beneficiary_name,
      aadhar_no,
      passbook_name,
      DOB,
      gender,
      mobile,
      social_category,
      farmer_category,
      farmer_type,
      primary_occupation,
      relative_type,
      relative_name,
      state_name,
      district,
      sub_district,
      village,
      address,
      pin_code) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
    applicationData.creator_id,
    applicationData.beneficiary_name,
    applicationData.aadhar_no,
    applicationData.passbook_name,
    applicationData.DOB,
    applicationData.gender,
    applicationData.mobile,
    applicationData.social_category,
    applicationData.farmer_category,
    applicationData.farmer_type,
    applicationData.primary_occupation,
    applicationData.relative_type,
    applicationData.relative_name,
    applicationData.state_name,
    applicationData.district,
    applicationData.sub_district,
    applicationData.village,
    applicationData.address,
    applicationData.pinCode,
  ];
  const [result] = await db.execute(sql, values);
  return result;
};
