
import { Action } from '@ngrx/store'

const initialState = false

export function cartsReducer(state: any = initialState, action: Action){
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

 
