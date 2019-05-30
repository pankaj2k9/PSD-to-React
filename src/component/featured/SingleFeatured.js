import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import classes from "./Featured.module.scss";

const SingleFeatured = ({ feature }) => {
    return (
        <div className={classes.singleFeturedBox}>
            <img
                className={"img-fluid"}
                src={require(`./../../assets/${feature.imageUrl}`)}
                alt={feature.title}
            />
            <div className={classes.singleFeturedBottomBox}>
                <h1>{feature.title}</h1>
                <p>
                    {feature.category}: {feature.role}
                </p>
            </div>
        </div>
    );
};
export default SingleFeatured;
