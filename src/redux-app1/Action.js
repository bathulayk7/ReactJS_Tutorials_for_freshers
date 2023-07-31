import { DECR, INCR, NAME, RST } from "./ConstActions"

export const decrAction=(val=1)=>{
    return {type:DECR,payload:val}
}
export const incrAction=(val=1)=>{
    return {type:INCR,payload:val}
}
export const resetAction=()=>{
    return {type:RST}
}
export const userNameAction=(name)=>{
    return {type:NAME,payload:name}
}