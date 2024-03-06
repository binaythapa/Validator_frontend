import { Navigate, useLocation } from "react-router-dom";

const ProtectedAppRoute = ({ children }) => {
  const authenticated = true;
  const location = useLocation();
  console.log("Protected routes");
  return (
    <>
      {authenticated === true ? (
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
