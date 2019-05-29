import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import TopBanner from "../component/home/TopBanner";
import Audience from "../component/home/Audience";
import Fetaured from "../component/home/Fetaured";

export default class Home extends Component {
    static propTypes = {
        prop: PropTypes
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <TopBanner />
                <Audience />
                <Fetaured />
                <Footer />
            </React.Fragment>
        );
    }
}
