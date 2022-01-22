import React, {useEffect, useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Hero from '../../component/Home/Hero'
import Card from '../../component/Home/CardHome'
import "./home.css"

import {API} from "../../config/api"


export default function Home() {
    const [music, setMusic] = useState([])

    const getMusic = async () => {
        try {
            const response = await API.get("/getmusics")
            // console.log(response.data.data)
            setMusic(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMusic()
    }, [])
    return (
        <Container fluid className='home'>
            <div className='bgImageHero'>
                {/* Navbar in component Hero */}
                <Hero className="heroHome" />
            </div>

            <div className='my-5 listMusic'>
                <Row className='mb-5 d-flex justify-content-center m-0'>
                    <h2 style={{ color: "#EE4622" }}>Dengarkan dan Rasakan</h2>
                </Row>

                <Row className='cardMusic mx-5 m-0'>

                    {music.map((a) => {
                            console.log(a)
                            return (
                                <Col className="d-flex justify-content-center">
                                    <Card
                                        key={a.id}
                                        id={a.id}
                                        image={a.thumbnail}
                                        title={a.title}
                                        year={a.year}
                                        artis={a.artis.name}
                                    />
                                </Col>
                            )
                        })}
                </Row>
            </div>

        </Container>
    )
}
