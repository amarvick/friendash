import reducers from './reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => createStore(reducers, undefined, applyMiddleware(thunk));

export default configureStore;