import { Outlet } from "react-router-dom";
import Header from "../../container/pages/header/header";

const MainContentLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainContentLayout;
