import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Fetaured extends Component {
    responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={this.responsive}
                        ssr={true} // means to render carousel on server-side.
                        slidesToSlide={2}
                        infinite={true}
                        autoPlay={
                            this.props.deviceType !== "mobile" ? true : false
                        }
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                    </Carousel>
                    ;
                </Row>
            </Container>
        );
    }
}
