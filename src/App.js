import "./_app.scss";

import { useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import LoginScreen from "./screen/loginScreen/LoginScreen";

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  // const history = useNavigate();
  console.log(accessToken);
  useEffect(() => {
    // history("/auth");
    if (accessToken) {
      return <LoginScreen />;
    }
  }, [accessToken, loading]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
