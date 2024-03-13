import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../providers/authProvider/authProvider";

const ProtectedAppRoute = ({ children }) => {
  const { jwtInfo, username } = useContext(AuthContext);
  console.log(jwtInfo);

  useEffect(() => {
    console.log(jwtInfo, username);
  }, []);

  const location = useLocation();
  // console.log("Protected routes");
  return (
    <>
      {jwtInfo.username ? (
        children
      ) : (
        <Navigate
          to="/login"
          replace={true}
          state={{ path: location.pathname + location.search }} //for redirect after login
        />
      )}
    </>
  );
};

export default ProtectedAppRoute;
