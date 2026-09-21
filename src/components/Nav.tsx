import { NavLink } from "react-router-dom";
import { profile } from "../data/resume";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        about
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
        blog
      </NavLink>
      <a href={`mailto:${profile.email}`}>contact</a>
    </nav>
  );
}
