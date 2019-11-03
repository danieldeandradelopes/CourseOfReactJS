import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CarouselHome from './components/CarouselHome';
import CardsProducts from './components/CardsProducts';
import CardsDigimon from './components/CardsDigimon';
import {Container, Row} from 'react-bootstrap'

function App() {
  return (
    <>
    <NavBar/>
    <CarouselHome/> 
    <br></br>
    <Container>    
      <hr></hr>
      <h1>Produtos</h1>
      <Row>
        <CardsProducts/>
      </Row>   
      <br></br>
      <hr></hr>
      <h1>Digimons</h1>
      <Row>
        <CardsDigimon/>
      </Row>   
    </Container>
    <Footer/>
    </>
  );
}

export default App;

