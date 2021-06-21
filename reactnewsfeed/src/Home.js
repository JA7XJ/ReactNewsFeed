import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Home.css'
import {
  BrowserRouter,  
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components';

const Styles = styled.div`
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;


export const Home = () => (
    <Styles>
        <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Ingresar
            </Button>
            <h1>
            </h1>
            <Button variant="primary" type="submit">
                ¡Registrate!
            </Button>

        </Form>
        </div>
    </Styles>
)