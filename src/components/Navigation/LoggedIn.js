import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <NavLink
        to="/login"
        className="nav-link"
        onClick={() => dispatch(logOut())}
      >
        <img
          style={{ backgroundColor: "white" }}
          src={user.imageUrl}
          alt="user-profile"
          width="40"
          height="40"
          class="rounded-circle"
        />
      </NavLink>
    </>
  );
}
