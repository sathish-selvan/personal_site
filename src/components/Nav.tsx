import { Link, NavLink } from "react-router-dom";
import { profile } from "../data/resume";

const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : "");

export default function Nav() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            &gt;_
          </span>
          {profile.name}
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLink to="/" end className={(s) => `nav-home ${linkClass(s)}`}>
            About
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
