import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBarStyled } from "../styles/CardQuestion";

export default class NavBar extends Component {
    render() {
        return (
            <NavBarStyled>
                <Link to='/'>Home</Link>
                <Link to='/question'>Formulario</Link>
                <Link to='/about'>About</Link>
            </NavBarStyled>
        );
    }
}
