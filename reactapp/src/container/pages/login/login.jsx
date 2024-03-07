import { useContext } from "react";
import AuthContext from "../../../config/providers/authProvider/authProvider";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Login = () => {
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

  return jwtInfo ? (
    <Navigate to="/logic" />
  ) : (
    <div className="flex justify-center mt-6">
      {/* {auth.name} */}
      <form onSubmit={handleLogin}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            className="border border-2 px-4 py-2 m-2"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            className="border border-2 m-2 px-4 py-2"
          />
        </label>
        <br />
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-[32px] py-3 bg-blue-500 rounded-[20px] text-xl text-white inline-block mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
