import form from './form'
import {reduxForm} from "redux-form";

const createArticle = reduxForm({
    form:'create-article'
})(form)

export default createArticle

