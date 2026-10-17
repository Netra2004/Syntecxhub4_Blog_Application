import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API from "../services/api";
import BlogCard from "../components/BlogCard";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await API.get("/posts");
      setPosts(response.data);
    } catch (error) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            ✨ Welcome to BlogSpace
          </span>

          <h1>
            Share Your Ideas.
            <br />
            Inspire the World.
          </h1>

          <p>
            A simple platform to write, publish,
            and discover amazing stories.
          </p>

          {user ? (
            <Link
              to="/create"
              className="hero-btn"
            >
              Start Writing
            </Link>
          ) : (
            <Link
              to="/register"
              className="hero-btn"
            >
              Get Started
            </Link>
          )}
        </div>
      </section>

      <main className="posts-container">
        <div className="section-header">
          <div>
            <h2>Latest Posts</h2>
            <p>
              Discover stories from our community
            </p>
          </div>

          {user && (
            <Link
              to="/create"
              className="create-btn"
            >
              + Create Post
            </Link>
          )}
        </div>

        {loading && (
          <div className="loading">
            Loading posts...
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading &&
          !error &&
          posts.length === 0 && (
            <div className="empty-state">
              <h3>No posts yet</h3>

              <p>
                Be the first person to publish
                something!
              </p>

              {user && (
                <Link
                  to="/create"
                  className="primary-btn"
                >
                  Create First Post
                </Link>
              )}
            </div>
          )}

        <div className="posts-grid">
          {posts.map((post) => (
            <BlogCard
              key={post._id}
              post={post}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;