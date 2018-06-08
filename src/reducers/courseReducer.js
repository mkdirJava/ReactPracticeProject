import * as types from ../actions/actionTypes;
export default function courseReducer(state = [] ,action){
  switch (action.type) {
    case type.CREATE_COURSE:
          debugger;
          return [...state,
            Object.assign({},action.course)
          ];
    default:
      return state;
  }
}
