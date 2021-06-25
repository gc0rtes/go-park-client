import { NavLink } from "react-router-dom";
import logo from "../../resources/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="50px" /> GoPark!
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search" className="nav-link" href="#">
                SEARCH
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/postevent" className="nav-link" href="#">
                CREATE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" href="#">
                SIGN IN
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

/* <div>
      <NavLink exact to="/">
        {" "}
        HOME |{" "}
      </NavLink>
      <NavLink to="/search"> SEARCH | </NavLink>
      <NavLink to="/postevent"> CREATE | </NavLink>
      <NavLink to="/signup"> SIGNUP | </NavLink>
      <NavLink to="/login"> LOGIN </NavLink>
    </div> */

/**
     * Option to disable a link in the navbar if necessary
     * <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
     */
