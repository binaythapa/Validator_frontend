import { Outlet } from "react-router-dom";
import Header from "../../container/pages/header/header";
import Navbar from "../../components/navbar/navbar";

const MainContentLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainContentLayout;
