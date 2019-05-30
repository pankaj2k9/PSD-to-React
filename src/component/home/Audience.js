import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AudienceOverview from "../audience/AudienceOverview";
import AudiencePie from "../audience/AudiencePie";
import AudienceBar from "../audience/AudienceBar";

export default class Audience extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={6}>
                        <AudienceOverview />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <AudiencePie />
                    </Col>
                    <Col sm={6}>
                        <AudienceBar />
                    </Col>
                </Row>
            </Container>
        );
    }
}
