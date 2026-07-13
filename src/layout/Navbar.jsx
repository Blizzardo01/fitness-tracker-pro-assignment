import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink
          to="/"
          className={({ isActive}) => (isActive ? "active" : "")}
          >
          Activities
        </NavLink>
        <NavLink
          to="/login">
          Login
        </NavLink>
        <NavLink
          to="/register">
          Register
        </NavLink>
            
      </nav>
    </header>
  );
}
