import axios from "axios";

// export async function getUser(){
//     return axios.get(`http://192.168.0.110:5001/api/employees`).then((response) => {
//         if (true) {
//           return {
//             message: "Success",
//             success: true,
//             data: response,
//           };
//         } 
//       });
// }




export function getUser() {
  const url = `http://192.168.0.110:5001/api/employees/`;
  return axios.get(url).then((response) => {
    if (true) {
      return {
        message: "Success",
        success: true,
        data: response,
      };
    } else {
      return {
        success: false,
        message: ERR_MSG_SOMETHING_WENT_WRONG,
        data: "",
        error: "",
      };
    }
  });
}