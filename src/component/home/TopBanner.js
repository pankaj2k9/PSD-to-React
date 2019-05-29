import React from "react";
import classes from "./TopBanner.module.scss";
import { Container, Row, Col } from "reactstrap";
const TopBanner = () => {
    return (
        <Container fluid className={classes.TopBanner}>
            <Row>
                <Col sm={6}>.col</Col>
                <Col sm={6}>.col</Col>
            </Row>
        </Container>
    );
};

export default TopBanner;
