import React from "react";
import classes from "./TopBanner.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import camada from "./../../assets/camada.png";

const TopBanner = () => {
    return (
        <div className={classes.banner}>
            <Container>
                <Row>
                    <Col sm={6} className={classes.leftBanner}>
                        <img className="img-fluid" src={camada} alt="camada" />
                    </Col>
                    <Col sm={6} className={classes.rightText}>
                        <h4>ATHLETE.ACTOR</h4>
                        <h1>DEANDRE JORDAN</h1>
                        <h4>
                            PRICE RANGE: <span> $500-$1000</span>
                        </h4>
                        <Row className={classes.threeBox}>
                            <Col sm={4}>
                                <div className={classes.singleDiv}>
                                    <div className={classes.leftBox}>
                                        <i className="fa fa-facebook" />
                                    </div>
                                    <div className={classes.rightBox}>
                                        <span>100,000</span> <br />
                                        Followers
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className={classes.singleDiv}>
                                    <div className={classes.leftBox}>
                                        <i className="fa fa-instagram" />
                                    </div>
                                    <div className={classes.rightBox}>
                                        <span>100,000</span>
                                        <br />
                                        Followers
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className={classes.singleDiv}>
                                    <div className={classes.leftBox}>
                                        <i className="fa fa-twitter" />
                                    </div>
                                    <div className={classes.rightBox}>
                                        <span>100,000</span> <br />
                                        Followers
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <p>
                            Hyland DeAndre Jordan Jr. (born July 21, 1988) is an
                            American professional basketball player for the
                            Dallas Mavericks of the national BasketBall
                            Associaltion (NBA). He played one session of college
                            basketball for Texas A&M University before being
                            slected by the Clippers in the second roud of the
                            2008 NBA draft with the 35th overall pick.
                        </p>
                        <Col sm={12} className={classes.awardBox}>
                            <h2> Awards </h2>
                            <ul>
                                <li>2x chapion of Lorem Ipsum Tournament</li>
                                <li> NBA player of the year 2019</li>
                                <li> 2x champion of Lorem Ipsum Tuornament</li>
                                <li>Star player nomination</li>
                            </ul>
                        </Col>
                        <Button color="secondary" size="lg" active>
                            Request Campaign
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;
