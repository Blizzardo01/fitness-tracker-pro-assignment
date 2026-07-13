import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();

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
        {!token && 
        <NavLink
          to="/login">
          Login
        </NavLink>
        }
        {!token &&
        
        <NavLink
          to="/register">
          Register
        </NavLink>
        }
        {token &&
        <NavLink to="/" onClick={logout}>
          Log out
        </NavLink>

        }
            
      </nav>
    </header>
  );
}
