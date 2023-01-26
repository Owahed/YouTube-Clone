import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import LoginScreen from "./screen/loginScreen/LoginScreen";
import Sidebar from "./components/sidebar/Sidebar";
import "./_app.scss";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const handelSidebarToggle = () => setSidebar(!sidebar);

  return (
    <>
      {/* <Header handelSidebarToggle={handelSidebarToggle} />
      <div className="app_container ">
        <Sidebar handelSidebarToggle={handelSidebarToggle} sidebar={sidebar} />
        <Container fluid className="app_main ">
          <HomeScreen />
        </Container>
      </div> */}
      <LoginScreen />
    </>
  );
}

export default App;
