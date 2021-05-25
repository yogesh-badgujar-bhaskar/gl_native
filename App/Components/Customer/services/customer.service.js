import omit from 'lodash/omit';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import axios from 'axios';

const _ = {omit, get, isEmpty, filter};

//Fetch Stores
export async function getCustomer(payload) {
  //  let queryString = await createQuery(payload);
  //  const url = API_ENDPOINTS.project + '?' + queryString;

  return axios
    .get('http://192.168.0.110:5002/api/customers/')
    .then(response => {
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

//Create Customer
export function createCustomer(payload) {
  const url = `http://192.168.0.110:5002/api/customers/add`;
  return axios.post(url, {...payload}).then(response => {
    if (true) {
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

export function deleteCustomer(payload) {
  return axios
    .delete(`http://192.168.0.110:5002/api/customers/${payload}`)
    .then(response => {
      if (response.status === 200) {
        return {
          message: 'Success',
          success: true,
          data: response.data,
        };
      } else {
        return {
          success: false,
          message: 'ERR_MSG_SOMETHING_WENT_WRONG',
          data: '',
          error: '',
        };
      }
    });
}

export function getCustomerById(payload) {
  const url = `http://192.168.0.110:5002/api/customers/${payload}`;
  return axios.get(url).then(response => {
    if (true) {
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

//Update Employee details
export function updateCustomer(payload) {
  const url = `http://192.168.0.110:5002/api/customers/${payload.id}`;
  const customer = _.omit(payload, 'customer.id');
  console.log('update....', customer);
  return axios.put(url, {...customer}).then(response => {
    if (true) {
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
