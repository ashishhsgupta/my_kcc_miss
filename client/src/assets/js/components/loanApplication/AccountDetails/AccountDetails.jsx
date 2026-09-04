import React, { useReducer } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GenericInput } from '../../../actions/GenericInput'
import { DISTRICT_OPTIONS, STATE_OPTIONS,BANK_OPTIONS,BRANCH_OPTIONS } from '../../../actions/loanActions/GlobalLoanOptions'
import { GlobalApplicationDetailsReducers } from '../../../reducers/GlobalApplicationDetailsReducers'
import { GlobalInitialState } from '../../../reducers/GlobalInitialState'

const AccountDetails = ({onSaveAndContinue}) => {
   
    const [state,dispatch] = useReducer(GlobalApplicationDetailsReducers,GlobalInitialState);
     const {form, errors} = state;
    const handleChange = (e)=>{
        let {name, value} = e.target;
      dispatch({type:"CHANGE_INPUT",payload:{name,value}})
    };

  return (
    <form>   
        <div className="m-3 p-2">
             <h6 className="bg-info p-1 border">Account Details</h6>
         <Row md={12}>
        <Col>
        <GenericInput  label="State"
                  name="stateName"
                  type="select"
                  value={form.stateName}
                  onChange={handleChange}
                  options={STATE_OPTIONS}
                  error={errors.stateName}
                  required={true} />
        </Col>
        <Col md={3}>
                <GenericInput
                  label="District"
                  name="district"
                  type="select"
                  value={form.district}
                  onChange={handleChange}
                  options={DISTRICT_OPTIONS}
                  error={errors.district}
                  required={true}
                />
              </Col>
              <Col md={3}>
                <GenericInput
                  label="Bank"
                  name="bank"
                  type="select"
                  value={form.bank}
                  onChange={handleChange}
                  options={BANK_OPTIONS}
                  error={errors.bank}
                  required={true}
                />
              </Col>
              <Col md={3}>
                <GenericInput
                  label="Branch"
                  name="branch"
                  type="select"
                  value={form.branch}
                  onChange={handleChange}
                  options={BRANCH_OPTIONS}
                  error={errors.branch}
                  required={true}
                />
              </Col>
    </Row>
    </div>
    </form>

  )
}

export default AccountDetails