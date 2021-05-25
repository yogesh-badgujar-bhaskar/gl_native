//import combbine reducer and all components reducer here
import {combineReducers} from 'redux';

import {project} from '../Components/Project/reducers/project';
import {customer} from '../Components/Customer/reducers/customer';
import {auth} from '../Components/Auth/SignIn/reducers/auth';
import {client} from '../Components/Client/reducers/client';

export default combineReducers({
  project,
  customer,
  // auth,
  client,
});
