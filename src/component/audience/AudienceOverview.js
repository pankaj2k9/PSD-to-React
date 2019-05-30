import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import classes from "./Audience.module.scss";
export default function AudienceOverview() {
    return (
        <div className={classes.audienceOverview}>
            <h1>Audience Stats Overview</h1>
            <Row className={classes.fiveBox}>
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
                <Col>
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
        </div>
    );
}
