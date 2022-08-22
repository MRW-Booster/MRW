import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Drawer from "./drawer";

const Layout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
