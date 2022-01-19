import React from 'react'

import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../component/Navbarr'

export default function Pay() {
    return (
        <div>
            <Navbar />

            <Container className="justify-content-center mx-auto my-5">
                <div style={{ color: "white" }}>
                    <h2>Premium</h2>
                    <p>Bayar sekarang dan nikmati streaming music yang kekinian dari DUMBSOUND</p>
                    <h4>DUMBSOUND : 0981312323</h4>
                </div>

                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="email" placeholder="Input Your Account Member" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="image">
                            <Form.Label className='custom-file-upload '>Attache Thumbnail</Form.Label>
                            <Form.Control name="image" type="file" placeholder="Attache Thumbnail" onChange={""}/>
                        </Form.Group>

                        <Button variant="warning" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
