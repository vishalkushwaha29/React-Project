import { NavLink } from "react-router-dom";
import "./Info.css";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-link-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
        </div>
    );
};

export default Navbar;