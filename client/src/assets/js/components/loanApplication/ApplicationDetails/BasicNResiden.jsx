import React, { useReducer } from 'react'
// import FarmerPersonalDetails from '../FarmerPersonalDetails'
// import ResidendialDetails from '../ResidendialDetails'
import { GenericButton } from '../../buttons/GenericButton'
import { BUTTON_TYPE } from '../../buttons/Constant'
import { NameValidation } from '../../validations/Validations'
import { GlobalApplicationDetailsReducers } from '../../../reducers/GlobalApplicationDetailsReducers'
import { GlobalInitialState } from '../../../reducers/GlobalInitialState'
import { FarmerPersonalDetailsValidation } from '../../validations/FarmerPersonalDetailsValidation'
import FarmerPersonalDetails from './FarmerPersonalDetails'
import ResidendialDetails from './ResidendialDetails'

const BasicNResiden = ({onSaveAndContinue}) => {
 const [state, dispatch] = useReducer(
    GlobalApplicationDetailsReducers,
    GlobalInitialState,
  );
  const { form, errors } = state;

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("submit clicked");
    console.log("form:", form);
    const validationErrors = FarmerPersonalDetailsValidation(form);
    console.log("validation errors:",validationErrors)
    const hasError = Object.values(validationErrors).some(
      (error)=> error !== ""
    );
    console.log("has errors:",hasError)
    if(hasError){
      console.log("form has validation errors")
      dispatch({type:"SET_ERRORS", payload:validationErrors});
      return;
    }
    console.log("Form submitted", form);
    alert(`Form submitted: ${JSON.stringify(form)}`)
    onSaveAndContinue();
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="m-3 p-2">
            <h6 className="bg-info p-1 border">Personal Details</h6>
            <FarmerPersonalDetails  form={form} errors={errors} dispatch={dispatch} />
            <h6 className="bg-info p-1 border">Residendial Address</h6>
            <ResidendialDetails form={form} errors={errors} dispatch={dispatch} />
             </div>
          <div className='d-flex justify-content-between px-4 pb-4'>
            <GenericButton type={BUTTON_TYPE.BACK_BTN} htmlType="button" btnTitle="BAck" />
            <GenericButton type={BUTTON_TYPE.GREEN_BTN} htmlType="submit" btnTitle="Save & Continue" />
          </div>
       
    </form>
  )
}

export default BasicNResiden;