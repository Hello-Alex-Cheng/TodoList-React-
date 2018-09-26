
import { takeEvery, put } from "redux-saga/effects";

import { initListAction } from './actionCreators';

import Axios from 'axios';

function* fetchData(){

    try {
        const res = yield Axios.get("./initListData.json");  /** 同样可以获取数据,一定要记得加上 yield */
        const action = initListAction(res.data.data);
        yield put(action);
    } catch (error) {
        console.log("err - - ",error);
    }

}


function* mySaga(){
    console.log("my saga");
    yield takeEvery("get_init_list",fetchData);
}

export default mySaga;