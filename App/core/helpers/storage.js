import AsyncStorage from "@react-native-community/async-storage";

const storage = AsyncStorage;

const Storage = {
  isSupported() {
    const testKey = "test";
    try {
      AsyncStorage.setItem(testKey, "1");
      AsyncStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  },

  clear() {
    AsyncStorage.clear();
  },

  saveUser(user) {
    try {
      AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      return null;
    }
  },

  loadUser() {
    try {
      return JSON.parse(AsyncStorage.getItem("user"));
    } catch (error) {
      return null;
    }
  },

  deleteUser() {
    try {
      AsyncStorage.removeItem("user");
    } catch (error) {
      return null;
    }
  },

  saveToken(token) {
    try {
      AsyncStorage.setItem("token", token);
    } catch (error) {
      return null;
    }
  },

  loadToken() {
    try {
      return AsyncStorage.getItem("token");
    } catch (error) {
      return null;
    }
  },

  deleteToken() {
    try {
      AsyncStorage.removeItem("token");
    } catch (error) {
      return null;
    }
  },

  saveLastTime() {
    try {
      return AsyncStorage.setItem("last-time", Date.now());
    } catch (error) {
      return null;
    }
  },

  isTimeout() {
    try {
      return Date.now() - storage.getItem("last-time") > 5000; // If the page is not reopen in 5 secs, it is considered that user exited it.
    } catch (error) {
      return true;
    }
  },

  setRemember(flag = true) {
    return AsyncStorage.setItem("remember", flag);
  },

  getRemember() {
    return AsyncStorage.getItem("remember");
  },
  
  removeRemember() {
    AsyncStorage.removeItem("token");
  },
};

if (!Storage.isSupported()) {
  console.log(
    "Your browser does not support sessionStorage. Don't worry. The app can work without it."
  );
}

export default Storage;