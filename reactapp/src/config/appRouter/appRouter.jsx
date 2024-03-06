import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Comparison from "../../container/pages/comparison/comparison";
import Login from "../../container/pages/login/login";
import MainContentLayout from "../../layout/mainContent/mainContentLayout";
import Upload from "../../container/pages/upload/upload";
import ProtectedAppRoute from "./protectedAppRoute";

const logicPaths = [
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
    element: <div>Hello world!</div>,
  },
  {
    path: "login",
    element: <Login />,
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
