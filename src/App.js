import "./_app.scss";

import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoginScreen from "./screen/loginScreen/LoginScreen";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Search from "./search/Search";

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      history("/login");
    }
  }, [accessToken, loading, history]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <HomeScreen />
            </Layout>
          }
        />
        <Route path="login" element={<LoginScreen />}></Route>
        <Route
          path="search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
