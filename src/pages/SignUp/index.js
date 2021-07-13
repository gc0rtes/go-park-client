import React, { useState, useEffect } from "react";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
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
    console.log("hi");
    dispatch(signUp(imageUrl, name, email, password));

    setImageUrl("");
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div className="container mylogin-container">
      <div className="d-flex justify-content-center h-100">
        <div className="my-login-card login-card">
          <div className="card-header login-card-header">
            <h3>Sign Up</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group form-group-margin">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-text-w-h">
                    <i
                      className="fas fa-id-badge"
                      style={{ fontSize: "1.75rem" }}
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={imageUrl}
                  placeholder="Profile photo url"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className="input-group form-group form-group-margin">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-text-w-h">
                    <i
                      className="fas fa-user"
                      style={{ fontSize: "1.75rem" }}
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group form-group form-group-margin">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-text-w-h">
                    <i className="fas fa-at" style={{ fontSize: "1.5rem" }}></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group form-group form-group-margin">
                <div className="input-group-prepend">
                  <span className="input-group-text input-group-text-w-h">
                    <i
                      className="fas fa-key"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn float-right login_btn"
                  onClick={submitForm}
                />
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center login-links">
                  <Link to="/login" style={{ textAlign: "center" }}>
                    Log In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
