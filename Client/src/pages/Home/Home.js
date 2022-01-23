import React, {useEffect, useState, useContext} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Hero from '../../component/Home/Hero'
import Card from '../../component/Home/CardHome'
import "./home.css"
import MusicPlayer from '../../component/Home/MusicPlayer'

import { API } from "../../config/api"
import { UserContext } from '../../context/UserContext'


export default function Home() {
    const [music, setMusic] = useState([])
    const [state] = useContext(UserContext);
    const [selectedMusic, setSelectedMusic] = useState(0);

    let history = useHistory()

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

    const selectMusic = (index) => {
        if (!state.isLogin) {
            setSelectedMusic(index);
        } else {
            // handleShowLogin();
            history.push('/login')
        }
    };

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

                    {music.map((a, i) => {
                            console.log(a)
                            return (
                                <Col onClick={() => selectMusic(i)} className="d-flex justify-content-center">
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
            <MusicPlayer musics={music} selectedMusicIndex={selectedMusic} />
        </Container>
    )
}
