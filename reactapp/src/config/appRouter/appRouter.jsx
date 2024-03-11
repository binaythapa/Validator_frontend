import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Comparison from "../../container/pages/comparison/comparison";
import Login from "../../container/pages/login/login";
import MainContentLayout from "../../layout/mainContent/mainContentLayout";
import Upload from "../../container/pages/upload/upload";
import ProtectedAppRoute from "./protectedAppRoute";
import Logout from "../../container/pages/logout/logout";
import Test from "../../container/pages/test/test";
import Info from "../../container/pages/info/info";

const logicPaths = [
  {
    path: "",
    element: (
      <ProtectedAppRoute>
        <Info />
      </ProtectedAppRoute>
    ),
  },
  {
    path: "upload",
    element: (
      <ProtectedAppRoute>
        <Upload />
      </ProtectedAppRoute>
    ),
  },
  {
    path: "compform",
    element: (
      <ProtectedAppRoute>
        {" "}
        <Comparison />
      </ProtectedAppRoute>
    ),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "test",
    element: <Test />,
  },
  {
    path: "logic",
    element: <MainContentLayout />,
    children: logicPaths,
  },
  {
    path: "*",
    element: (
      <div className="font-bold text-3xl text-center mt-[150px]">
        No Routes Available
      </div>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
