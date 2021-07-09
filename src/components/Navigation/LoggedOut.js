import React from "react";
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <NavLink to="/login" className="nav-link">
        <i className="fas fa-user-circle" style={{ fontSize: "1.95rem" }}></i>
      </NavLink>
    </>
  );
}
