import {ADD_TAB,DEL_TAB} from "../actions/types";

const initialState= [
    {
        name:'main',
        id:1},
    {
        name:'auth',
        id:2},]


 const tabs =(state=initialState,action:any) =>{
     switch (action.type){
         case ADD_TAB:
             let newTab ={
                 name: action.name,
                 id: action.id
             }
             return [...state,newTab];
         case DEL_TAB:
             return state.filter(tab => tab.id !== action.id);
         default: return state
     }
 }

 export default tabs