import { DECR, INCR, NAME, RST } from "./ConstActions"

export const decrAction=()=>{
    return {type:DECR}
}
export const incrAction=()=>{
    return {type:INCR}
}
export const resetAction=()=>{
    return {type:RST}
}
export const userNameAction=(name)=>{
    return {type:NAME,payload:name}
}