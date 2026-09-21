import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        about
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
        blog
      </NavLink>
      <a href="mailto:sathish.t2000@gmail.com">contact</a>
    </nav>
  );
}
