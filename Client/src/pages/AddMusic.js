import React from 'react'

import { Form, Button, Container } from 'react-bootstrap'

import Navbar from '../component/Navbarr'

export default function AddMusic() {
    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Form>
                    <Form.Group className="mt-5 d-flex justify-content-center" style={{color: "White", marginTop: "50px"}}>
                        <h3>Add Music</h3>
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-between mb-2">
                        <Form.Group className="" controlId="formBasicText">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="email" placeholder="Title" />
                        </Form.Group>

                        <Form.Group className="" controlId="image">
                            <Form.Label className='custom-file-upload '>Attache Thumbnail</Form.Label>
                            <Form.Control name="image" type="file" placeholder="Attache Thumbnail" onChange={""}/>
                        </Form.Group>
                    </Form.Group>


                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="password" placeholder="Year" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicText">
                        <Form.Label>Singer</Form.Label>
                        <Form.Control type="text" placeholder="Singer" />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="image">
                        <Form.Label className='custom-file-upload '>Attache Thumbnail</Form.Label>
                        <Form.Control name="image" type="file" placeholder="Attache Thumbnail" onChange={""}/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicPassword">
                        <Button variant="warning" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
