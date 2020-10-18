import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../scss/Navbar.scss";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = (event) => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__row">
          <div className="Navbar__title">Reference shortener</div>
          <div className="Navbar__refs">
            <div className="ref">
              <NavLink to="/create">Create</NavLink>
            </div>
            <div className="ref">
              <NavLink to="/links">References</NavLink>
            </div>
            <div>
              <a href="#" onClick={logoutHandler}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
