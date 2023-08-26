import { put, takeEvery } from "redux-saga/effects"

import { DECR, DECR_SUCCESS, INCR, INCR_SUCCESS, RST, RST_SUCCESS } from "../ConstActions"

function* incCounter(){
    try {
        yield put({type:INCR_SUCCESS,payload:1})
    } catch (error) {
        console.log(error)
    }
}

function* decCounter(){
    try {
        yield put({type:DECR_SUCCESS,payload:1})
    } catch (error) {
        console.log(error)
    }
}
function* resetCounter(){
    try {
        yield put({type:RST_SUCCESS})
    } catch (error) {
        console.log(error)
    }
}


function* SagaCounter() {
 yield takeEvery(INCR,incCounter)
 yield takeEvery(DECR,decCounter)
 yield takeEvery(RST,resetCounter)
}

export default SagaCounter