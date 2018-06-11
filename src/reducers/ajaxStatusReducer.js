import * as types from '../actions/actionTypes';
import initialState from './initialState';

//Can use this one process for ajax as if it ends in _SUCCESS then it has loaded.
export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress ,action){
  if(action.type == types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if(actionTypeEndsInSuccess(action.type) || action.type == types.AJAX_CALL_ERROR){
    return state - 1;
  }
  return state;
}

function actionTypeEndsInSuccess (type){
  return type.substring(type.length - 8 ) =='_SUCCESS';
}
