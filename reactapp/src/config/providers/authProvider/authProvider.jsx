import { useState, useEffect, createContext } from "react";
import { signIn } from "../../../utils/api/api/authAPI";
import jwt_decode from "jwt-decode";
import {
  storeAuthToken,
  getAuthToken,
  clearAuthToken,
} from "../../../components/functions/authFunctions";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [username, setUserName] = useState(getAuthToken("username"));
  const [jwtInfo, setJwtInfo] = useState(getAuthToken("jwt_info"));
  const [authToken, setAuthToken] = useState(getAuthToken("tokens"));

  // if user refreshes the page then we get tokens and info from local storage
  // useEffect(() => {
  //   let tokenInfo = getAuthToken();
  //   console.log(tokenInfo);
  //   if (tokenInfo) {
  //     console.log(tokenInfo.tokens, tokenInfo.username, tokenInfo.jwt_info);
  //     setAuthToken(tokenInfo.tokens);
  //     setUserName(tokenInfo.username);
  //     setJwtInfo(tokenInfo.jwt_info);
  //   }
  // }, []);

  const logOutAll = () => {
    clearAuthToken();
    setAuthToken();
    setJwtInfo();
    setUserName();
  };

  const signInUser = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    // console.log(username, password);
    try {
      let resp = await signIn({ username, password });
      console.log(resp);
      if (resp.status === 200) {
        setAuthToken(resp.data);
        let jwt_info = jwt_decode(resp.data.access);
        setJwtInfo(jwt_info);
        setUserName(jwt_info.username);
        //store Tokens to Local Storage
        storeAuthToken({
          tokens: resp.data,
          jwt_info,
          username: jwt_info.username,
        });
        //save
        return "SUCCESS";
      } else {
        return "ERROR";
      }
    } catch (error) {
      throw error;
    }
  };

  let authData = {
    signInUser,
    username,
    jwtInfo,
    authToken,
    logOutAll,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
