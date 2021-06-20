import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink exact to="/">
        {" "}
        HOME |{" "}
      </NavLink>
      <NavLink to="/search"> SEARCH | </NavLink>
      <NavLink to="/postevent"> CREATE | </NavLink>
      <NavLink to="/signup"> SIGNUP | </NavLink>
      <NavLink to="/login"> LOGIN </NavLink>
    </div>
  );
}
