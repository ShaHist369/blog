import {reduxForm} from "redux-form";
import formSignUp from './form'

let signUp = reduxForm({
    form: 'sign-up'
})(formSignUp)



export default signUp