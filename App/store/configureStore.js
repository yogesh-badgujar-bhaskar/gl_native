import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {composeWithDevTools} from 'redux-devtools-extension';

//import main reducer and saga here
import reducer from './reducer';
import rootSaga from './saga';

//define sagaMiddleWare
const sagaMiddleware = createSagaMiddleware();

//define store here
console.log('reducer : ', reducer);
export default createStore(reducer, applyMiddleware(sagaMiddleware));

//run rootsaga from here
sagaMiddleware.run(rootSaga);
