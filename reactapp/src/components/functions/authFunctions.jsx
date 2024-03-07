let STORAGE_NAME = "AUTH_TOKENS";

export const storeAuthToken = (userdata) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(userdata));
};

export const getAuthToken = () => {
  return (
    localStorage.getItem(STORAGE_NAME) &&
    JSON.parse(localStorage.getItem(STORAGE_NAME))
  );
};

export const clearAuthToken = () => {
  localStorage.removeItem(STORAGE_NAME);
};
