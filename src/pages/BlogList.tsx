import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { formatDate, posts } from "../lib/posts";

export default function BlogList() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <div className="page-head">
          <p className="kicker">Blog</p>
          <h1 className="page-title">Writing</h1>
          <p className="page-lead">Notes from things I build and learn.</p>
        </div>

        {posts.length === 0 ? (
          <p className="page-lead">No posts yet — check back soon.</p>
        ) : (
          <ul className="post-list">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link className="post-card" to={`/blog/${p.slug}`}>
                  <span className="post-date">{formatDate(p.date)}</span>
                  <h2 className="post-card-title">{p.title}</h2>
                  <p className="post-desc">{p.description}</p>
                  <span className="post-more">Read post →</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
