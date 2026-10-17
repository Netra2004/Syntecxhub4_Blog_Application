import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const plainText = post.content
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return (
    <article className="blog-card">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="blog-image"
        />
      )}

      <div className="blog-card-content">
        <span className="category">
          {post.category}
        </span>

        <h2>{post.title}</h2>

        <p>{plainText}...</p>

        <div className="post-info">
          <span>
            By {post.author?.name || "Unknown"}
          </span>

          <span>
            {new Date(
              post.createdAt
            ).toLocaleDateString()}
          </span>
        </div>

        <Link
          to={`/post/${post._id}`}
          className="read-more"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;