import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const index = createStore(rootReducer, applyMiddleware(thunk));

export default index;
