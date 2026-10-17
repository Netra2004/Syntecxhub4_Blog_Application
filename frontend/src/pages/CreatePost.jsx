import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import API from "../services/api";

const CreatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Technology",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      setFetching(true);
      setError("");

      const response = await API.get(`/posts/${id}`);

      setFormData({
        title: response.data.title || "",
        content: response.data.content || "",
        category: response.data.category || "Technology",
        image: response.data.image || "",
      });
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to load post"
      );
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.title.trim()) {
      setError("Please enter a post title.");
      return;
    }

    if (!formData.content.trim()) {
      setError("Please enter post content.");
      return;
    }

    try {
      setLoading(true);

      if (isEditing) {
        await API.put(`/posts/${id}`, formData);
      } else {
        await API.post("/posts", formData);
      }

      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to save post. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="loading">
        Loading post...
      </div>
    );
  }

  return (
    <main className="editor-page">
      <div className="editor-container">

        <div className="editor-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>

          <h1>
            {isEditing ? "Edit Post" : "Create New Post"}
          </h1>

          <p>
            {isEditing
              ? "Update your blog post"
              : "Share your thoughts with the world"}
          </p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form
          className="editor-form"
          onSubmit={handleSubmit}
        >

          {/* TITLE */}

          <div className="form-group">
            <label htmlFor="title">
              Post Title
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter an interesting title..."
              required
            />
          </div>


          {/* CATEGORY + IMAGE */}

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="category">
                Category
              </label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Technology">
                  Technology
                </option>

                <option value="Programming">
                  Programming
                </option>

                <option value="AI">
                  Artificial Intelligence
                </option>

                <option value="Career">
                  Career
                </option>

                <option value="Education">
                  Education
                </option>

                <option value="Lifestyle">
                  Lifestyle
                </option>

                <option value="General">
                  General
                </option>
              </select>
            </div>


            <div className="form-group">
              <label htmlFor="image">
                Image URL
              </label>

              <input
                id="image"
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

          </div>


          {/* CONTENT */}

          <div className="form-group">
            <label htmlFor="content">
              Content
            </label>

            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your story here..."
              rows={14}
              required
            />
          </div>


          {/* BUTTON */}

          <div className="form-actions">
            <Link
              to="/"
              className="cancel-btn"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="primary-btn publish-btn"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : isEditing
                ? "Update Post"
                : "Publish Post"}
            </button>
          </div>

        </form>

      </div>
    </main>
  );
};

export default CreatePost;