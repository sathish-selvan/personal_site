import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import TerminalWindow from "../components/TerminalWindow";
import { getPost } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  return (
    <div className="container">
      <Nav />
      <TerminalWindow path={`~/blog/${slug ?? ""}`}>
        {!post ? (
          <>
            <p className="hero-about">Post not found.</p>
            <Link className="back-link" to="/blog">
              ← back to blog
            </Link>
          </>
        ) : (
          <>
            <div className="post-header">
              <div className="prompt">
                <b>sathish@portfolio</b> ~/blog % cat {post.slug}.mdx
              </div>
              <h1 className="post-title">{post.title}</h1>
              <div className="post-meta">{post.date}</div>
            </div>
            <div className="mdx-content">
              <post.Component />
            </div>
            <Link className="back-link" to="/blog">
              ← back to blog
            </Link>
          </>
        )}
      </TerminalWindow>
    </div>
  );
}
