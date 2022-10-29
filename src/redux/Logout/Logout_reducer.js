import {LogOut} from '../Logout/Logout_types'
const init_State={
    islogin:false
}
const icecreame_reducer=(state=init_State,action)=>{
switch(action.type){

    case LogOut:
        return{
        ...state,
        islogin: !state.islogin
    }
     
    default :return state
}}

export default icecreame_reducer
 