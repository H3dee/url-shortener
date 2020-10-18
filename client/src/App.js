import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import "materialize-css";
import "./scss/App.scss";

function App() {
  const { token, userId, login, logout, ready } = useAuth();
  const isAuthinticated = !!token;
  const routes = useRoutes(isAuthinticated);

  if(!ready){
    return (
      <Loader />
    )
  }

  return (
    <AuthContext.Provider
      value={{ token, userId, login, logout, isAuthinticated }}
    >
      <Router>
        <React.Fragment>
        {isAuthinticated ? <Navbar /> : null}
          {routes}
          </React.Fragment>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
