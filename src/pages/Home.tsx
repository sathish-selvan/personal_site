import Nav from "../components/Nav";
import TerminalWindow from "../components/TerminalWindow";
import { profile, experience, coreStack, education } from "../data/resume";

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <TerminalWindow path="~/about">
          <div className="prompt">
            <b>sathish@portfolio</b> ~ % whoami
          </div>
          <h1 className="hero-name">
            {profile.name}
            <span className="cursor"></span>
          </h1>
          <div className="hero-role">{profile.role}</div>
          <p className="hero-about">{profile.tagline}</p>

          <div className="links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.resumeUrl} download>
              Résumé (PDF)
            </a>
          </div>

          <div className="section-label">experience</div>
          {experience.map((job) => (
            <div className="exp-item" key={job.role + job.org}>
              <div className="exp-head">
                <span>
                  <span className="role">{job.role}</span>
                  <span className="org"> · {job.org}</span>
                </span>
                <span className="dates">{job.dates}</span>
              </div>
              <p className="exp-summary">{job.summary}</p>
              <div className="tags plain">
                {job.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="section-label">core stack</div>
          <div className="tags plain">
            {coreStack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="section-label">education</div>
          {education.map((e) => (
            <div className="edu-line" key={e.degree}>
              <span className="degree">{e.degree}</span>
              <span className="school"> · {e.school}</span>
              <span className="dates"> · {e.dates}</span>
            </div>
          ))}
        </TerminalWindow>
      </div>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.name} · built with React + Vite
      </footer>
    </>
  );
}
