import { FaDownload, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import TechBadge from "../components/TechBadge";
import { coreStack, education, experience, profile, stats } from "../data/resume";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <section className="hero">
          <p className="hero-hello">Hi, I'm</p>
          <h1 className="hero-name">
            {profile.name}
            <span className="cursor" aria-hidden="true" />
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-meta">{profile.location}</p>

          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" /> Get in touch
            </a>
            <a className="btn" href={profile.resumeUrl} download>
              <FaDownload aria-hidden="true" /> Résumé
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn aria-hidden="true" /> LinkedIn
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" /> GitHub
            </a>
          </div>

          <ul className="stats">
            {stats.map((s) => (
              <li className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="experience">
          <p className="kicker">01 · Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li
                className={job.featured ? "role current" : "role"}
                key={job.role + job.org}
              >
                <h3 className="role-title">{job.role}</h3>
                <p className="role-meta">
                  <span className="role-org">{job.org}</span>
                  <span className="role-dates">{job.dates}</span>
                  {job.featured && <span className="pill">Current</span>}
                </p>
                {job.summary && <p className="role-summary">{job.summary}</p>}

                <ul className="bullets">
                  {job.highlights.map((h) => (
                    <li key={h.title}>
                      <strong>{h.title} :</strong> {h.description}
                    </li>
                  ))}
                </ul>

                {job.tags && (
                  <ul className="chips" aria-label="Technologies">
                    {job.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="stack">
          <p className="kicker">02 · Toolbox</p>
          <h2 className="section-title">Core stack</h2>
          <ul className="tech-grid">
            {coreStack.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </ul>
        </section>

        <section className="section" id="education">
          <p className="kicker">03 · Education</p>
          <h2 className="section-title">Where I studied</h2>
          <ul className="edu-list">
            {education.map((e) => (
              <li className="edu-item" key={e.degree}>
                <span className="edu-degree">{e.degree}</span>
                <span className="edu-school">{e.school}</span>
                <span className="edu-dates">{e.dates}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
