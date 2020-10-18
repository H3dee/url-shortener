import React, { useMemo, useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook"
import "../scss/Auth.scss";

const AuthPage = () => {
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const message = useMessage()
  const {login} = useContext(AuthContext)

  const btnDisabled = useMemo(
    () => ({
      opacity: loading ? "0.7" : "1",
    }),
    [loading]
  );

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message)
    } catch (err) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      login(data.token, data.userId)
    } catch (err) {}
  };

  useEffect(() => {
     message(error)
     clearError()
  }, [message, error, clearError])

  return (
    <div className="Auth">
      <div className="Auth__title">Short your reference!</div>
      <div className="container">
        <div className="Auth__row">
          <div className="Auth__window">
            <div className="Auth__subtitle">Authorization</div>
            <div className="Auth__email">
              <div className="email__subtitle">Email</div>
              <div className="email__input">
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
            </div>
            <div className="Auth__password">
              <div className="password__subtitle">Password</div>
              <div className="password__input">
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
            </div>
            <div className="Auth__buttons">
              <button 
               style={btnDisabled} 
               disabled={loading}
               onClick={loginHandler}
               >
                Sign in
              </button>
              <button
                style={btnDisabled}
                onClick={registerHandler}
                disabled={loading}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
