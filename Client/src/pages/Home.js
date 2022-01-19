import React from 'react'
import Hero from '../component/Hero'
import { Container, Col, Row } from 'react-bootstrap'

import Navbar from "../component/Navbarr"
// import Hero from "../component/Hero"

import Card from '../component/CardHome'


export default function Home() {
    return (
        <Container fluid>
            <Navbar />
            <Hero />

            <div className='my-5'>
                <Row className='mb-5 d-flex justify-content-center'>
                    <h2 style={{ color: "#EE4622" }}>Dengarkan Rasakan</h2>
                </Row>

                <Row className='mx-5 d-flex justify-conten-center'>
                    <Col>
                        <Card />
                    </Col>
                    <Col>
                        <Card />
                    </Col>
                    <Col>
                        <Card />
                    </Col>
                    <Col>
                        <Card />
                    </Col>
                    <Col>
                        <Card />
                    </Col>
                    <Col>
                        <Card />
                    </Col>
                </Row>
            </div>

        </Container>
    )
}
