
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';


/* 使用 redux-saga 来处理异步请求 */
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)

);

sagaMiddleware.run(mySaga);

export default store;