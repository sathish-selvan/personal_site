import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name} · Built with React + Vite
      </div>
    </footer>
  );
}
