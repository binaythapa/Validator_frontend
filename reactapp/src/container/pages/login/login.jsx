import { useContext, useState } from "react";
import AuthContext from "../../../config/providers/authProvider/authProvider";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";
import { singUp } from "../../../utils/api/api/authAPI";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { signInUser, jwtInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const redirecAfterLogin = location.state?.path
    ? location.state.path
    : "/logic";

  const handleLogin = (e) => {
    signInUser(e)
      .then((resp) => {
        if (resp === "SUCCESS") {
          console.log("SUCCESS FROM AUTHCONTEXXT");
          console.log(redirecAfterLogin);
          navigate(redirecAfterLogin, { replace: true });
        } else {
          console.log("FAIL");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSingUp = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirm_password.value;
    console.log(username, password, confirmPassword);

    let resp = await singUp({ username, password });
    if (resp.status === 200) {
      alert("Success, You may sign In");
      setIsSignIn(true);
    }
  };

  const updateSignedState = (updatedState) => {
    setIsSignIn(updatedState);
  };

  return jwtInfo ? (
    <Navigate to="/logic" />
  ) : (
    <div className="min-h-screen flex items-center justify-center w-full bg-[#F3F4F6] ">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md border-2 border-gray-50">
        <h1 className="text-2xl font-bold text-center mb-4 mt-2 w-[290px]">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn ? (
          <SignIn
            handleLogin={handleLogin}
            handleSignedState={updateSignedState}
          />
        ) : (
          <SignUp
            handleSingUp={handleSingUp}
            handleSignedState={updateSignedState}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
