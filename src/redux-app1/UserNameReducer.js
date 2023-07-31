import { NAME } from "./ConstActions"

const initialState={
    name:"Bathula"
}

const userNameReducer = (state=initialState,action) => {
  switch(action.type){
    case NAME: return {name:action.payload}
    default:return state
  }
}

export default userNameReducer