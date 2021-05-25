//************************ SIGN IN *****************/
// export function authentication(payload) {
//     const url = `http://192.168.0.110:4000/users/login`;
//     return axios.post(url, {  ...payload  }).then((response) => {
//       if (response.status === 200) {
//         return {
//           data: response.data,
//         };
//       } else {
//         return {
//           success: false,
//           message: ERR_MSG_SOMETHING_WENT_WRONG,
//           data: "",
//           error: "",
//         };
//       }
//     });
//   }
//*************************************************/

export function loginApi(email, password) {
  return fetch('http://192.168.0.110:4000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => response.json())
    .then(json => json)
    .catch((error) => {
      throw error;
    });
}