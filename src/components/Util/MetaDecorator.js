import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    {/* Title */}
    <title>{title}</title>

    {/* General Meta Tags */}
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="LifeKing" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={imageAlt} />
    <meta property="og:image:width" content="598" />
    <meta property="og:image:height" content="398" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={window.location.href} />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:image:width" content="598" />
    <meta name="twitter:image:height" content="398" />

    {/* Additional SEO Meta Tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

    {/* Canonical Link */}
    <link rel="canonical" href={window.location.href} />
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
};

export default MetaDecorator;
