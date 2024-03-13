import { axiosInstance } from "../axiosInstance";

export const signIn = async ({ username, password }) => {
  console.log(username, password);
  try {
    let resp = await axiosInstance.post("/account/token/", {
      username,
      password,
    });

    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const singUp = async ({ username, password }) => {
  console.log(username, password);
  try {
    let resp = await axiosInstance.post("/account/signup/", {
      username,
      password,
    });
    console.log(resp);
    if (resp.status === 200) {
      return resp;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
