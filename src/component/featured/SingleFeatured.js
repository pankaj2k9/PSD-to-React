import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const SingleFeatured = ({ feature }) => {
    return (
        <div>
            <img
                className="img-fluid"
                src={require(`./../../assets/${feature.imageUrl}`)}
                alt={feature.title}
            />
            <h1>{feature.title}</h1>
            <p>
                {feature.category}: {feature.role}
            </p>
        </div>
    );
};
export default SingleFeatured;
