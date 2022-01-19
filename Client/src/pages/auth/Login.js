import React, { useContext, useState } from 'react'
import { Row, Card, Form, Button, Alert } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'

import {UserContext} from "../../context/UserContext"

import Navbar from '../../component/Navbarr'
import "./auth.css"

import { API } from '../../config/api'

export default function Login() {
    let history = useHistory();

    const [,dispatch] = useContext(UserContext)

    const [message, setMessage] = useState(null)

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const { email, password } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    }

    const handleLogin = async (e) => {
        try {
            e.preventDefault()

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const body = JSON.stringify(form);
            console.log(body)

            const response = await API.post("/login", body, config)
            console.log(response.data.data)

            if (response?.status === 200) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data
                })

                if (response.data.data.listAs === "1") {
                    history.push("/listtransactions")
                } else {
                    history.push("/")
                }

                const alert = (
                    <Alert variant="success" className="py-1" >
                        Login Success
                    </Alert >
                )
                setMessage(alert)
            }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Login failed
                </Alert>
            )
            setMessage(alert)
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="login">
                <Row className="justify-content-center align-items-center m-0">
                    <Card className="card">
                        <Card.Body>
                            <Form
                                onSubmit={handleLogin}
                            >
                                {message && message}
                                <Form.Group className="d-flex justify-content-center my-4">
                                    <h3 className= "title"> Login</h3>
                                </Form.Group>

                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Control className="formInput" name="email" type="email" placeholder="Enter email" value={email} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control className ="formInput" name="password" type="password" placeholder="Password" value={password} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicPassword">
                                    <Button className="buttonSubmit" type="submit">
                                        Login
                                    </Button>
                                </Form.Group>

                                <Form.Text className="d-flex justify-content-center text-muted">
                                    Don't have an account ? <Link to="/register" className="linkTo" > Klik Here </Link>
                                </Form.Text>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </>
    )
}
