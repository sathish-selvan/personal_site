import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { formatDate, getPost } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  return (
    <>
      <Nav />
      <main className="wrap">
        <Link className="back-link" to="/blog">
          ← All posts
        </Link>
        {!post ? (
          <div className="page-head">
            <h1 className="page-title">Post not found</h1>
            <p className="page-lead">That post doesn't exist (yet).</p>
          </div>
        ) : (
          <article>
            <header className="page-head" style={{ paddingTop: "1rem" }}>
              <h1 className="post-title">{post.title}</h1>
              <div className="post-meta">{formatDate(post.date)}</div>
            </header>
            <div className="prose">
              <post.Component />
            </div>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}
