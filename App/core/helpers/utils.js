import AsyncStorage from "@react-native-community/async-storage";

export const getTokenUser = (token) => {

    // Set the token from localStorage
    if (!token) {
      token = AsyncStorage.getItem('token');
    }
  
    const userData = jwt.decode(token);
  
    // Check if has valid key
    if (!_.isEmpty(userData)) {
      return userData;
    } else {
      return {};
    }
  
  }
  