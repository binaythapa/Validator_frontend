import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="text-md">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default Header;
