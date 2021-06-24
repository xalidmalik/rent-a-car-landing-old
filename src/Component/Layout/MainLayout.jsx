import React from "react";
import Navbar from "../UI/Navbar/Navbar";

const MainLayout = props => {
  return (
    <>
      <div className="overflow-hidden page">
        <Navbar />
        {/* <h1>SideDrawer</h1> */}
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;
