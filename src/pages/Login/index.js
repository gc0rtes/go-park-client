import React, { useState, useEffect } from "react";

import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

// import background from "../../resources/images/background4.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="container mylogin-container"
      style={
        {
          // backgroundImage: `url(${background})`,
          // backgroundRepeat: "no-repeat",
          // width: "50vw",
          // width: "100%",
          // height: "100%",
        }
      }
    >
      <div className="d-flex justify-content-center h-100">
        <div className="card login-card">
          <div className="card-header login-card-header">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group form-group-margin">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-text-w-h">
                    <i className="fas fa-user" style={{ fontSize: "22px" }}></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group form-group form-group-margin">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-text-w-h">
                    <i className="fas fa-key" style={{ fontSize: "20px" }}></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                  onClick={submitForm}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center login-links">
              Don't have an account?
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * <p>
                <label>
                  {" "}
                  Email address:{" "}
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  {" "}
                  Password:{" "}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </p>
              <p>
                <button type="submit" onClick={submitForm}>
                  Log in
                </button>
              </p>
 */
