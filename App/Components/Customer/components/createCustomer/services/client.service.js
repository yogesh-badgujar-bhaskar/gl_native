import axios from 'axios';

export function createClient(payload) {
  const url = `http://192.168.0.110:5001/api/clients/add`;
  return axios.post(url, {...payload}).then(response => {
    console.log('response from createClient', response.data);
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
