import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DivForm, DivStyle } from '../styles/CardQuestion'

export default class Home extends Component {
    render() {
        return (
            <DivForm>
                <DivStyle>
                    <h2>Sobre este formulario</h2>
                    <p>
                        {
                        `Realiza este cuestionario para descrubir que tan friki eres, encontrarás preguntas de video juegos y de peliculas que un friki de corazón ha visto más de 2 veces.`
                        }
                    </p>
                    <Image src="https://www.pngkit.com/png/full/192-1923288_octocat-github-logo-transparent-octdrey-catburn.png" roundedCircle width="250px" style={{ textAlign: 'center' }} />
                    <Link to="/question" className="nav-link">Comienza el formulario aquí</Link>
                </DivStyle>
            </DivForm>
        )
    }
}
