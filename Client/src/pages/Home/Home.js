import React, {useEffect, useState, useContext} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import Hero from '../../component/Home/Hero'
import Card from '../../component/Home/CardHome'
import "./home.css"
import MusicPlayer from '../../component/Home/MusicPlayer'

import { API } from "../../config/api"
import { UserContext } from '../../context/UserContext'

import Login from '../auth/Login'
import Register from '../auth/Register'


export default function Home() {
    const [music, setMusic] = useState([])
    const [payments, setPayments] = useState([])
    const [userId, setUserId] = useState()

    const [state] = useContext(UserContext);
    const [selectedMusic, setSelectedMusic] = useState(0);

    console.log(state.isLogin)

    let history = useHistory()

    // if (state.isLogin) {
    //     setUserId(state.user.id)
    // }

    const getMusic = async () => {
        try {
            const response = await API.get("/getmusics")
            // console.log(response.data.data)
            setMusic(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getStatusPayment = async () => {
        console.log(state.user.id)
        try {
            const response = await API.get("/getpayments")
            setPayments(response.data.data)

        } catch (error) {
            console.log(error)
        }
    }
    // console.log(payments)

    useEffect(() => {
        getMusic();
        // getStatusPayment();
    }, [])

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const registerModalProps = {
        showRegister,
        handleCloseRegister,
        handleShowLogin,
    };

    const loginModalProps = {
        showLogin,
        handleCloseLogin,
        handleShowRegister,
    };

    const selectMusic = (index) => {
        // console.log(index)
        if (state.isLogin) {
            setSelectedMusic(index);
        } else {
            handleShowLogin();
            // history.push('/login')
        }
    };
    // console.log(selectedMusic)

    // console.log(music)
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
                        // console.log(music)
                            // console.log(a)
                            return (
                                <Col onClick={() => selectMusic(i)} className="d-flex justify-content-center"
                                    style={{
                                        // width: "12rem",
                                        cursor: "pointer"
                                    }}>
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
                {/* {state.islogin === true && */}
                {state.isLogin ? (
                    <MusicPlayer musics={music} selectedMusicIndex={selectedMusic} />
                ): (
                    <></>
                )}
            {/* } */}
            </div>
            <Login {...loginModalProps} />
            <Register {...registerModalProps} />
        </Container>
    )
}
