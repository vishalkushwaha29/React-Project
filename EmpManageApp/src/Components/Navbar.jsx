
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
const Navbar = () => {
    return (
      <>
        <div className="navbar navbar-expand-lg bg-body-tertiary navContainer">
          <div className="linkContainer">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "border-bottom" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/employees"
              className={({ isActive }) => (isActive ? "border-bottom" : "")}
            >
              Employees
            </NavLink>
            <NavLink
              to="/Add"
              className={({ isActive }) => (isActive ? "border-bottom" : "")}
            >
              Add Employee
            </NavLink>
          </div>
          <div className="AppName fw-bolder">
            <h3 className="fw-bold">
              Employee Management System
              <small className="text-body-secondary fw-lighter fst-italic fs-6"> by Vishal kushwaha</small>
            </h3>
          </div>
        </div>
      </>
    );
}

export default Navbar;