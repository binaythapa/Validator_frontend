import { useContext } from "react";
import AuthContext from "../../config/providers/authProvider/authProvider";
import { Button } from "../tailwind/tailwind_variable";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { jwtInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/logic";

  let inActiveClass = "text-indigo-700";
  let activeClass = "text-gray-500 hover:text-gray-700";

  const handleLogout = () => {
    navigate("/logout", { replace: true });
  };
  return (
    <>
      <div className="flex flex-wrap place-items-center ">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-50 shadow shadow-gray-300 text-gray-600 font-bold w-screen">
            <div className="px-5 xl:px-12 py-3 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                Logic
              </a>

              <ul className="hidden md:flex px-4 mx-auto text-[1.05rem] font-semibold font-heading space-x-12">
                <li>
                  <NavLink
                    // to="/logic"
                    to="http://localhost:3000/logic"
                    className={isHome ? inActiveClass : activeClass}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/logic/upload"
                    className={({ isActive }) =>
                      isActive ? inActiveClass : activeClass
                    }
                  >
                    Client Info
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/logic/compform"
                    className={({ isActive }) =>
                      isActive ? inActiveClass : activeClass
                    }
                  >
                    Add Info
                  </NavLink>
                </li>
                <li>
                  <a className="hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>

              <div className="hidden xl:flex items-center space-x-5 items-center">
                {/* <a className="flex items-center hover:text-gray-200" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                  </a> */}

                <a className="flex items-center hover:text-gray-600" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>

                {jwtInfo?.username && (
                  <Button onClick={handleLogout}>Logout</Button>
                )}
              </div>
            </div>

            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  );

  //   return <></>;
};

export default Navbar;
