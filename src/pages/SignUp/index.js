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
    <div className="container">
      <form>
        <h2>Sign Up</h2>

        <p>
          <label>
            {" "}
            Profile Photo:{" "}
            <input
              type="text"
              value={imageUrl}
              placeholder="image url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
        </p>

        <p>
          <label>
            {" "}
            Name:{" "}
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </p>

        <p>
          <label>
            {" "}
            Email address:{" "}
            <input
              type="email"
              value={email}
              placeholder="Enter email"
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
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </p>
        <p>
          <button type="submit" onClick={submitForm}>
            Sign Up
          </button>
        </p>
        <p>
          <Link to="/login" style={{ textAlign: "center" }}>
            Click here to log in
          </Link>
        </p>
      </form>
    </div>
  );
}
