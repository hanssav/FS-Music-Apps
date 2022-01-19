import React from 'react'

import { Card } from 'react-bootstrap'
import imageCard1 from "../public/images/imageCard1.png"

function CardHome() {
    return (
        <Card style={{ backgroundColor: "#3A3A3A", color: "white"}}>
            <Card.Img variant="top" src={imageCard1} />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title>Cireceles</Card.Title>
                    <Card.Text>
                        2019
                    </Card.Text>
                </div>

                <div>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardHome;
