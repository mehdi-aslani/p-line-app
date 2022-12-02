import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import PlineTools from "../services/PlineTools";

const PrivateRoute = (props) => {
  return PlineTools.getCookies("isAuth") ? (
    <>
      <Header
        UserName={
          PlineTools.getCookies("username").charAt(0).toUpperCase() +
          PlineTools.getCookies("username").slice(1)
        }
        LogoutAction={() => {
          if (window.confirm("Are you sure you want to leave?"))
            props.LogoutAction();
        }}
      />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
