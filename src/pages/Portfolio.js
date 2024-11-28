import React from "react";
import MetaDecorator from "../components/Util/MetaDecorator";
import Header from "../components/header/Header";
import PortfolioItem from "../feature/portfolio/protfolio-lists";

const blog = require("../components/data/blog.json");

const Portfolio = () => {
  const image = "https://maidemo.s3.eu-west-2.amazonaws.com/logo512.png"; // Replace with your actual image URL or variable

  return (
    <>
      <MetaDecorator
        description={blog.portDescription}
        title={blog.portTitle}
        imageUrl={image}
        imageAlt={blog.metaImageAlt}
      />
      <Header />
      {blog.blogItems.map((blogItem) => (
        <PortfolioItem
          title={blogItem.title}
          date={blogItem.date}
          minutes={blogItem.minutes}
          subtitle={blogItem.subtitle}
          blogPost={blogItem.blogPost}
          key={blogItem.title}
        />
      ))}
    </>
  );
};

export default Portfolio;
