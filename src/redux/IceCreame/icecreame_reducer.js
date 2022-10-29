import {BUY_icecreame,Buy_IceCreqam_two} from '../IceCreame/IceCreame_type'
const init_State={
    cart:[],
    numF_icecreame:50
}
const icecreame_reducer=(state=init_State,action)=>{
switch(action.type){

    case BUY_icecreame:
        return{
        ...state,
        cart:  [...state.cart,action.payload ]
    }
    case Buy_IceCreqam_two:
        return{
            ...state,
            numF_icecreame:state.numF_icecreame-1
        }
    default :return state
}}

export default icecreame_reducer
 