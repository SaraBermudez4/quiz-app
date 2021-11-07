import React, { Component } from 'react'
import { DivForm } from '../styles/CardQuestion'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

export default class About extends Component {
    render() {

        const ContainerStyle = styled.div`
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
            width: 80%;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        `
        return (
            <DivForm>
                <ContainerStyle>
                    <h2>Sobre este formulario</h2>
                    <p>{
                        `El 25 de mayo se celebra el Día del Orgullo Friki en nuestro país. Una celebración surgida en 2006 en Internet y que congrega a toda una comunidad, a priori minoritaria, que no se avergüenza en absoluto de celebrar con orgullo que son frikis.
                        Gamers, geeks, freaks, weirdos y demás miembros de esta comunidad tiene la oportunidad cada 25 de mayo de mostrar al mundo que ser friki es algo por lo que merece la pena sentirse orgulloso. Y es que, aunque muchos no lo reconozcan, todos tenemos un 'friki' interior, en mayor o menor medida, con el que nos sentimos bien -incluso orgullosos- y del que renegar es tan absurdo como poco sano.
                        Por ello y porque queremos unirnos a esta divertida celebración, hemos elaborado este friki-test con el fin de que compartáis con orgullo aquello que gritáis a los cuatro vientos: ¡Soy Friki!`
                    }
                    </p>
                    <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--cYgHri3s--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/lepok0cc608byz1aq139.png" rounded width="250px" style={{ textAlign: "center" }} />

                </ContainerStyle>
            </DivForm>
        )
    }
}
