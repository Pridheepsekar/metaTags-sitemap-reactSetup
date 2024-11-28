import React from "react";
import MetaDecorator from "../components/Util/MetaDecorator";
import Header from "../components/header/Header";

const content = require("../components/data/content.json");

const Homepage = () => {

    const image = "https://maidemo.s3.eu-west-2.amazonaws.com/logo512.png";

    return (
      <>
        <MetaDecorator
          description={content.pageDescription}
          title={content.pageTitle}
          imageUrl={image}
          imageAlt={content.metaImageAlt}
        />
        <Header />
        <div>Welcome to the Home Page!</div>
      </>
    );
  };
  
  export default Homepage;
  
