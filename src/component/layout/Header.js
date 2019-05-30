import React, { Component } from "react";
import classes from "./Header.module.scss";
import logo from "./../../assets/logo.png";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="container">
                <Navbar expand="md">
                    <NavbarBrand href="/">
                        <img className={classes.logo} src={logo} alt="Logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Overview</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Audience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Protfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Campaigns</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
