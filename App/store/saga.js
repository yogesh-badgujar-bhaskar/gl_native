import {all} from 'redux-saga/effects';

//auth releted sagas.
// import auth from '../containers/auth/saga/auth';
// import project from '../Screens/Home/pages/ThirdPage/sagas/project';
import project from '../Components/Project/sagas/project';
import customer from '../Components/Customer/sagas/customer';
import auth from '../Components/Auth/SignIn/saga/auth';
import client from '../Components/Client/sagas/client';

export default function* rootSaga() {
  yield all(project);
  yield all(customer);
  // yield all(auth);
  yield all(client);
}
