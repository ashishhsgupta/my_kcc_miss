import { NameValidation,EmailValidation, MobileValidation,RoleValidation,PasswordValidation,ConfirmPasswordValidation} from "./Validations"

export const FormValidation = (form) => {
 return {
          name: NameValidation(form.name),
          email: EmailValidation(form.email),
          mobile: MobileValidation(form.mobile),
          role: RoleValidation(form.role),
          password: PasswordValidation(form.password),
          confirmPassword: ConfirmPasswordValidation(
            form.password,
            form.confirmPassword,
          ),
 }
}