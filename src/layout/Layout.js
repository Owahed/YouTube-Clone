import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RouterProvider } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import routes from "../router/router";

const MainLayout = ({ children }) => {
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

const Layout = () => {
  return (
    <MainLayout>
      <RouterProvider router={routes} />
    </MainLayout>
  );
};

export default Layout;
