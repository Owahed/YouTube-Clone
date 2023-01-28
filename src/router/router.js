import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screen/homeScreen/HomeScreen";
import LoginScreen from "../screen/loginScreen/LoginScreen";
import Search from "../search/Search";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "search",
    element: <Search />,
  },
  // {
  //   path: "/",
  //   element: <Redirect />,
  // },
]);
export default routes;
