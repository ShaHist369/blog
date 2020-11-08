import {reduxForm} from "redux-form";
import commentForm from './comment-form'

let commentFormContainer = reduxForm({
    form: 'sign-up'
})(commentForm)



export default commentFormContainer