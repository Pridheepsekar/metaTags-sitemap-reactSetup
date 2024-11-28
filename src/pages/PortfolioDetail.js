import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MetaDecorator from "../components/Util/MetaDecorator";
import Header from "../components/header/Header";

const blog = require("../components/data/blog.json");

const PortfolioDetail = () => {
  const { blogPostFileName } = useParams();
  const navigate = useNavigate();

  const matchingBlog = blog.blogItems.find(
    (blogItem) => blogItem.blogPost === blogPostFileName
  );

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <>
      {matchingBlog && (
        <MetaDecorator
          description={matchingBlog.subtitle}
          title={matchingBlog.title}
          imageUrl={matchingBlog.blogImage}
          imageAlt={matchingBlog.blogPost}
        />
      )}
      <Header />
      <div>
          {/* Back Button */}
          <button onClick={handleBackClick} style={{ marginTop: "20px" }}>
          Back
        </button>
        {matchingBlog ? (
          <div>
            <h1>{matchingBlog.title}</h1>
            <img src={matchingBlog.blogImage} alt={matchingBlog.title} />
            <p>{matchingBlog.date}</p>
            <p>{matchingBlog.minutes}</p>
            <p>{matchingBlog.subtitle}</p>
          </div>
        ) : (
          <p>No blog post found for "{blogPostFileName}".</p>
        )}
      
      </div>
    </>
  );
};

export default PortfolioDetail;
