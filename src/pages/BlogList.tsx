import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import TerminalWindow from "../components/TerminalWindow";
import { posts } from "../lib/posts";

export default function BlogList() {
  return (
    <>
      <div className="container">
        <Nav />
        <TerminalWindow path="~/blog">
          <div className="prompt">
            <b>sathish@portfolio</b> ~/blog % ls
          </div>
          <h1 className="section-label page-title">posts</h1>
          {posts.length === 0 ? (
            <p className="hero-about">No posts yet — check back soon.</p>
          ) : (
            <ul className="post-list">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                  <span className="post-date">{p.date}</span>
                  <div className="post-desc">{p.description}</div>
                </li>
              ))}
            </ul>
          )}
        </TerminalWindow>
      </div>
    </>
  );
}
