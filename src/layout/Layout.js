import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const handelSidebarToggle = () => setSidebar(!sidebar);
  return (
    <>
      <Header handelSidebarToggle={handelSidebarToggle} />
      <div className="app_container ">
        <Sidebar handelSidebarToggle={handelSidebarToggle} sidebar={sidebar} />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;
