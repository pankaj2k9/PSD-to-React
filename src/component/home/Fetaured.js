import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleFeatured from "./../featured/SingleFeatured";
import classes from "./../featured/Featured.module.scss";

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
    Data = [
        {
            title: "Moonlight",
            category: "Movie",
            role: "Main Actor",
            imageUrl: "camada-one.png"
        },
        {
            title: "Moonlight1",
            category: "Movie",
            role: "Main Actor",
            imageUrl: "camada-two.png"
        },
        {
            title: "Moonlight2",
            category: "Movie",
            role: "Main Actor",
            imageUrl: "camada-three.png"
        },
        {
            title: "Moonlight3",
            category: "Movie",
            role: "Main Actor",
            imageUrl: "camada-one.png"
        },
        {
            title: "Moonlight4",
            category: "Movie",
            role: "Main Actor",
            imageUrl: "camada-two.png"
        },
        {
            title: "Moonlight5",
            category: "Movie",
            role: "Main Actor",
            imageUrl: "camada-three.png"
        }
    ];

    render() {
        return (
            <div className={classes.featured}>
                <Container>
                    <Row>
                        <h3>Featured</h3>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            responsive={this.responsive}
                            ssr={true} // means to render carousel on server-side.
                            slidesToSlide={3}
                            infinite={true}
                            autoPlay={
                                this.props.deviceType !== "mobile"
                                    ? false
                                    : false
                            }
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass={classes.caruoselContainer}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass={classes.itemPaddding}
                        >
                            {this.Data.map((singleFeature, i) => {
                                return (
                                    <SingleFeatured
                                        feature={singleFeature}
                                        key={i}
                                    />
                                );
                            })}
                        </Carousel>
                        ;
                    </Row>
                </Container>
            </div>
        );
    }
}
