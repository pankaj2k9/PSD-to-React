import React from "react";
import classes from "./Footer.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import logo from "./../../../assets/logo.png";
const FooterBottom = () => {
    return (
        <div className={classes.footerBottom}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <img
                            className="img-fluid"
                            src={logo}
                            alt="Footer Logo"
                        />
                    </Col>
                    <Col sm={6}>
                        <h1>
                            Are you an Influencer? Join Famepick and Create you
                            "About Me" page.
                        </h1>
                    </Col>
                    <Col sm={3}>
                        <Button color="secondary" size="lg" active>
                            Join Fimpack
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterBottom;
