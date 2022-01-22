import React, {useContext, useState} from 'react'
import { Row, Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import Navbar from '../../component/Navbarr'

import { API } from '../../config/api'
import { UserContext } from '../../context/UserContext'

export default function Register() {
    let history = useHistory()

    const [, dispatch] = useContext(UserContext)
    const title = "Register";
    document.title = "Music Apps | " + title;

    const [message, setMessage] = useState(null);

    // Store data with useState here ...
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        listAs: "",
        gender: "",
        phone: "",
        address: "",
    })

    const { fullName, email, password, gender, phone, address  } = form;

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            listAs: "0"
        })
    }


    const handleOnSubmit = async (e) => {
        try {
        e.preventDefault();

        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        }

        const body = JSON.stringify(form)
        const response = await API.post("/register", body, config)

        console.log(response.data.data)

        // Notification
            if (response.data.status === "success") {
                const alert = (
                    <Alert variant="success" className="py-1">
                        Success
                    </Alert>
                );
                setMessage(alert);

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data,
                })
                history.push("/")

            } else {
                const alert = (
                    <Alert variant="danger" className="py-1">
                        Failed
                    </Alert>
                );
                setMessage(alert);
            }

        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };


    return (
        <div>
            <Navbar />

            <Row className="register justify-content-center m-0">
                <Card className= "card">
                    <Card.Body>
                        {message && message}
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="my-4">
                                <h3 className="title" >Register</h3>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control onChange={handleOnChange} className="bg-dark text-light" name="email" type="email" placeholder="Enter email" value={ email }/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control onChange={handleOnChange} className="bg-dark text-light" name="password" type="password" placeholder="Password" value={ password }/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control onChange={handleOnChange} className="bg-dark text-light" name="fullName" type="text" placeholder="Enter Full Name" value={ fullName }/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Select onChange={handleOnChange} className="bg-dark text-light w-100 py-2" aria-label="Default select example" name="gender" placeholder="Gender" value={gender}>
                                    <option className='bg-dark text-light' value="" disabled selected>Gender</option>
                                    <option className='bg-dark text-light' value="male">Male</option>
                                    <option className='bg-dark text-light' value="female">Female</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control onChange={handleOnChange} className="bg-dark text-light" name="phone" type="number" placeholder="Phone" value={ phone }/>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicText">
                                <Form.Control onChange={handleOnChange} className="bg-dark text-light" name="address" type="text" placeholder="Address" value={address} as="textarea" style={{resize: "none", height: "50px"}}/>
                            </Form.Group>

                            <Form.Group className="my-3 d-flex justify-content-center" controlId="formBasicSubmit">
                                <Button className="text-light" variant="warning" type="submit" style={{width: "100%", backgroundColor: "#f15532"}}>Register
                                </Button>
                            </Form.Group>

                            <Form.Text className="d-flex justify-content-center text-muted">
                                Don't have an account ?
                                <Link to="/login" className="linkTo"> Klik Here </Link>
                            </Form.Text>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}
