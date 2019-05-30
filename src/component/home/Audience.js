import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AudienceOverview from "../audience/AudienceOverview";
import AudiencePie from "../audience/AudiencePie";
import AudienceBar from "../audience/AudienceBar";
import classes from "./../audience/Audience.module.scss";

export default class Audience extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <AudienceOverview />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} className={classes.audiencePie}>
                        <h1 className={classes.audienceChartHeading}>
                            Top Audience Data
                        </h1>
                        <AudiencePie />
                    </Col>
                    <Col sm={6} className={classes.audienceBar}>
                        <h1 className={classes.audienceChartHeading}>
                            Age and Gender Spilit
                        </h1>
                        <AudienceBar />
                    </Col>
                </Row>
            </Container>
        );
    }
}
