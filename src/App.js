import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./component/Home";
import Footer from "./component/layout/Footer";
import NotFound from "./component/errors/NotFound";
import NewContact from "./component/contacts/FormContact";
import { ToastContainer } from "react-toastify";
import ListContact from "./component/contacts/ListContact";
import Login from "./component/login/Login";
import React, { useState, useEffect } from "react";
import PrivateRoute from "./component/private-route/PrivateRoute";
import ChangePassword from "./component/users/ChangePassword";
import ImportContacts from "./component/contacts/ImportContacts";
import PlineTools from "./component/services/PlineTools";
import { SipRoutes } from "./component/routes/sip-routes";

const App = () => {
  const navigate = useNavigate();
  const [, setState] = useState({ menuHide: false });

  useEffect(() => {
    setState({ menuHide: PlineTools.getCookies("isAuth") });
  }, []);

  const login = (result) => {
    PlineTools.setCookies("isAuth", true);
    PlineTools.setCookies("username", result.username);
    PlineTools.setCookies("token", result.token);
    setState({});
    navigate("/");
  };

  const logout = () => {
    PlineTools.removeCookies("isAuth");
    PlineTools.removeCookies("username");
    PlineTools.removeCookies("token");

    PlineTools.setCookies("name", "");
    PlineTools.setCookies("username", "");
    PlineTools.setCookies("token", "");

    setState({});
    navigate("/login");
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        ltr
        pauseOnFocusLoss
        draggable
        pauseOnHover
        Row
        theme="colored"
      />
      <Container fluid style={{ paddingBottom: "3.5vw" }}>
        <Routes>
          <Route element={<PrivateRoute LogoutAction={logout} />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact/create" element={<NewContact />} />
            <Route path="/contact/edit/:id" element={<NewContact />} />
            <Route path="/contact/index" element={<ListContact />} />
            <Route path="/contact/import" element={<ImportContacts />} />
            <Route path="/user/change-password" element={<ChangePassword />} />
            {SipRoutes.map((v, i) => {
              return <Route key={i} path={v.path} element={v.element} />;
            })}
          </Route>

          <Route path="/login" element={<Login LoginAction={login} />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
