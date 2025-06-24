import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Rutas
      </NavLink>
      <NavLink
        to="/preparacion"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Preparación
      </NavLink>
      <NavLink
        to="/motivacion"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Motivación
      </NavLink>
      <NavLink
        to="/transporte"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Transporte
      </NavLink>
      <NavLink
        to="/calendario"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Calendario
      </NavLink>
    </nav>
  );
}
