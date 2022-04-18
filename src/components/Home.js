import { Image } from "@chakra-ui/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ContainerStyled, DivForm } from "../styles/CardQuestion";

export default class Home extends Component {
    render() {
        return (
            <DivForm>
                <ContainerStyled>
                    <h2>Inicio</h2>
                    <p>{
                        `Realiza este cuestionario para descrubir que tan friki eres, encontrarás preguntas de video juegos y de peliculas que un friki de corazón ha visto más de 2 veces.`
                    }
                    </p>
                    <Image src="https://www.pngkit.com/png/full/192-1923288_octocat-github-logo-transparent-octdrey-catburn.png" rounded width="250px" style={{ textAlign: "center" }} />
                    <Link to='/question'>
                        Comienza el formulario aquí
                    </Link>
                </ContainerStyled>
            </DivForm>
        );
    }
}