import { AadharValidation, NameValidation,EmailValidation, MobileValidation,DOBValidation,
GenderValidation,SocialCategoryValidation,FarmerCategoryValidation,FarmerTypeValidation,
 FarmerOccupationValidation,RelativeTypeValidation,RelativeNameValidation,StateNameValidation,DistrictValidation,
SubDistrictValidation,VillageValidation,AddressValidation,PinCodeValidation} from "./Validations"

export const FarmerPersonalDetailsValidation = (form) => {
 return {
          name: NameValidation(form.name),
          mobile: MobileValidation(form.mobile),
          aadharNumber:AadharValidation(form.aadharNumber),
          passbookName:NameValidation(form.name),
          DOB:DOBValidation(form.DOB),
          gender:GenderValidation(form.gender),
          socialCategory:SocialCategoryValidation(form.socialCategory),
          farmerCategory:FarmerCategoryValidation(form.farmerCategory),
          farmerType:FarmerTypeValidation(form.farmerCategory),
          primaryOccupation:FarmerOccupationValidation(form.primaryOccupation),
          relativeType:RelativeTypeValidation(form.relativeType),
          relativeName:RelativeNameValidation(form.relativeName),
          stateName:StateNameValidation(form.stateName),
          district:DistrictValidation(form.district),
          subDistrict:SubDistrictValidation(form.subDistrict),
          village:VillageValidation(form.village),
          address:AddressValidation(form.address),
          pinCode:PinCodeValidation(form.pinCode),

 }
}