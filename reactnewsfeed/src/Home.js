import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Home.css'
import { Feed } from './Feed';
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData, useAuth, useUser } from 'reactfire';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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


//export const Home = () => (
export function Home(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = useAuth();

    function registrar() {
        auth.createUserWithEmailAndPassword(email, password);
    };

    console.log(email);
    console.log(password);
    
    function ingresar() {
        auth.signInWithEmailAndPassword(email, password).catch(err => console.log(err));
        if(auth.currentUser=email){
            
        };
    };

    return(
    <Styles>
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email"  value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button onClick={ingresar}>
                    Ingresar
                </Button>
                <h1>
                </h1>
                <Button onClick={registrar}>
                    ¡Registrate!
                </Button>
            </Form>
        </div>
    </Styles>
    );    
}
//)