import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PortfolioItem = ({ title, date, minutes, subtitle, blogPost}) => (
    <>
        <div>
            <Link to={`/portfolio/${blogPost}/`}>
                <h4>{title}</h4>
            </Link>
                <h6>
                    {date} - {minutes}
                </h6>
                <p>{subtitle}</p>
        </div>
    </>
);
PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    blogPost: PropTypes.string.isRequired,
};

export default PortfolioItem;