// import { createReducer, on } from '@ngrx/store';
// import { inside, outside } from './showmenu.actions';
 
// export const initialState = false;
 
// const _showmenuReducer = createReducer(
//   initialState,
//   on(inside, (state) => !state),
//   on(outside, (state) => {
//     if (state){
//       return !state
//     }
//     return state
//   })
// );

// export function showmenuReducer(state: any, action: any) {
//   return _showmenuReducer(state, action);
// }

import { Action } from '@ngrx/store'

const initialState = false

export function showmenuReducer(state: any = initialState, action: Action){
  console.log(action.type)

  switch(action.type){
    case "INSIDE":
      console.log(state)
      return !state

    case "OUTSIDE":
      if (state){
        console.log(state)
        return !state
      }
      return state
    default:
      return state
  }

}

 
