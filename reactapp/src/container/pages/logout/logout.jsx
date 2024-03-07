import { useEffect } from "react";
import { clearAuthToken } from "../../../components/functions/authFunctions";
import { Navigate } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    clearAuthToken();
  }, []);
  return (
    <div className="text-2xl text-center-mt-6">
      LOGOUT
      <Navigate to="/login" />
    </div>
  );
};

export default Logout;
