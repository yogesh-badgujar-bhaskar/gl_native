import omit from 'lodash/omit';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import axios from 'axios';

const _ = {omit, get, isEmpty, filter};

//Fetch Stores
export async function getProject(payload) {
  //  let queryString = await createQuery(payload);
  //  const url = API_ENDPOINTS.project + '?' + queryString;

  return axios.get('http://192.168.0.110:5001/api/projects').then(response => {
    if (response.status === 200) {
      return {
        message: 'Success',
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: '',
        error: '',
      };
    }
  });
}
