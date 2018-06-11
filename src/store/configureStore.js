// two lines are to add middleware for the store
import {createStore,applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    // apply the middleware to the store
    applyMiddleware(thunk,reduxImmutableStateInvariant())
  );


}
