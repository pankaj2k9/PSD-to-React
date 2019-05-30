import React from "react";
import classes from "./Footer.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import moblie from "./../../../assets/footer-mobile.png";
const FooterTop = () => {
    return (
        <div className={classes.footerTop}>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h2>
                            DeAndre Jordan has successfully perticipated in 512
                            campaigns
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliuqua. Ut enim ad minim veniam, quis
                            mostrud exercitation ullamco laboris misi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore.
                        </p>
                        <Button color="secondary" size="lg" active>
                            Request Campaign
                        </Button>
                    </Col>
                    <Col sm={4}>
                        <img className="img-fluid" src={moblie} alt="mobile" />
                    </Col>
                    <Col sm={4}>
                        <h2>Recent Campaigns</h2>
                        <div>
                            <h1> Ipsy+ Jordin Sparks</h1>
                            <p>
                                We teamed up american idon winner Jordin Sparks
                                and the amazing makeup subscription box Ipsy
                            </p>
                        </div>
                        <div>
                            <h1> Ipsy+ Jordin Sparks</h1>
                            <p>
                                We teamed up american idon winner Jordin Sparks
                                and the amazing makeup subscription box Ipsy
                            </p>
                        </div>
                        <div>
                            <h1> Ipsy+ Jordin Sparks</h1>
                            <p>
                                We teamed up american idon winner Jordin Sparks
                                and the amazing makeup subscription box Ipsy
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterTop;
