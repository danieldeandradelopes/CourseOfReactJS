import React from 'react';
import { Card } from 'react-bootstrap';

export default function Footer () {
    
    return (
    <>     
    <br />
        <Card bg="dark" text="white" style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title style={{textAlign: 'center'}}> Nessa série de vídeos nós aprendemos: </Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                    <ul style={{listStyleType: 'none'}}>
                        <li> - Instalar Nodejs, Npm, yarn e create-react-app-cli</li>
                        <li> - Usar o bootstrap no projeto </li>
                        <li> - Usar um navbar </li> 
                        <li> - Usar um carosel </li>                         
                        <li> - Criar uma lista de produtos </li> 
                        <li> - Consumir uma web api </li> 
                        <li> - Criar footer </li> 
                    </ul> 
                </Card.Text>
            </Card.Body>
        </Card>
    </>

    );
    
}

