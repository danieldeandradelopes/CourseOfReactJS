import React, {Component} from 'react';
import {Card,Button, Col} from 'react-bootstrap'


class CardsProducts extends Component {

    state = {
      cards: [
            {
                imagem: 'https://w1.ezcdn.com.br/rainhadoscachos/fotos/grande/540fg1/griffus-vou-de-coco-kit-completo-com-6-produtos.jpg',
                title: 'Card 1',
                text: 'Text do card 1 para que nós possamos ver a diferença entre um e outro.',

            },
            {
                imagem: 'https://w1.ezcdn.com.br/rainhadoscachos/fotos/grande/927fg1/griffus-vou-de-babosa-kit-com-6-produtos.jpg',
                title: 'Card 2',
                text: 'Text do card 2 para que nós possamos ver a diferença entre um e outro.',

            },
            {
                imagem: 'https://d3am7jbinpjofr.cloudfront.net/Custom/Content/Products/10/08/1008173_kit-para-cabelo-cacheado-e-ondulado-4-produtos-cac-95767_m3_637072707890238012.jpg',
                title: 'Card 3',
                text: 'Text do card 3 para que nós possamos ver a diferença entre um e outro.',

            }
        ]  
    };




    render() {

        

        return (
            <>
                {this.state.cards.map( card => 
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.imagem} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                        {card.text}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>            
                </Col>
            )}  
        
            </>
        )
    }

}

export default CardsProducts;