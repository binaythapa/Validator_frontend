import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../config/providers/authProvider/authProvider";

const Header = () => {
  const { jwtInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("logout");
    navigate("/logout", { replace: true });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("logout");
    navigate("/login");
  };
  return (
    <div>
      <div className="text-md">
        {jwtInfo.username ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
