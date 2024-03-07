let STORAGE_NAME = "AUTH_TOKENS";

export const storeAuthToken = (userdata) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(userdata));
};

export const getAuthToken = (type) => {
  if (localStorage.getItem(STORAGE_NAME)) {
    if (type) {
      if (type === "username") {
        return JSON.parse(localStorage.getItem(STORAGE_NAME)).username;
      } else if (type === "jwt_info") {
        return JSON.parse(localStorage.getItem(STORAGE_NAME)).jwt_info;
      } else if (type === "tokens") {
        return JSON.parse(localStorage.getItem(STORAGE_NAME)).tokens;
      }
    } else {
      return JSON.parse(localStorage.getItem(STORAGE_NAME));
    }
  } else {
    return "";
  }
};

export const clearAuthToken = () => {
  localStorage.removeItem(STORAGE_NAME);
};
