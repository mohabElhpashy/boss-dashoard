import { createStore,applyMiddleware,compose} from 'redux';
// import CakeREDUCER from './Cakes/CakeReducer';
import logger from 'redux-logger' 
import Thunk from 'redux-thunk';
import Root_reducer from './rootReducer'
const Store =createStore(Root_reducer,
    
    
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          // To dispatch our calls asynchronously
          applyMiddleware(logger,Thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : compose(applyMiddleware(logger,Thunk))
    
    )


export default Store