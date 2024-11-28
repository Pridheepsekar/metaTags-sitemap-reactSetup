import React from "react";
import MetaDecorator from "../components/Util/MetaDecorator";
import Header from "../components/header/Header";

const blog = require("../components/data/blog.json");

const Contact = () => {
  const image = "https://maidemo.s3.eu-west-2.amazonaws.com/logo512.png"; // Replace with your actual image URL or variable

  return (
    <>
      <MetaDecorator
        description={blog.aboutDescription}
        title={blog.aboutTitle}
        imageUrl={image}
        imageAlt={blog.metaImageAlt}
      />
      <Header />
      <div>Welcome to the Contact !</div>
    </>
  );
};

export default Contact;
