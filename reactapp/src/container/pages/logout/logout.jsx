import { useContext, useEffect } from "react";
import { clearAuthToken } from "../../../components/functions/authFunctions";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../../config/providers/authProvider/authProvider";

const Logout = () => {
  const { logOutAll } = useContext(AuthContext);

  const navigate = useNavigate();
  console.log("Hey Logout");
  useEffect(() => {
    logOutAll();
    navigate("/login", { replace: true });
  }, []);

  return (
    <div className="text-2xl text-center-mt-6">
      LOGOUT
      {/* <Navigate to="/login" /> */}
    </div>
  );
};

export default Logout;
