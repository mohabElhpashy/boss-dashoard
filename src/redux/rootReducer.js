import {combineReducers}from 'redux';

// import Cake__reducer from './Cakes/CakeReducer'
import Log_out from './Logout/Logout_reducer';
// import Logout from 

const roootReducer =combineReducers({
    // cake:Cake__reducer,
    Log_out:Log_out
})
export default roootReducer;