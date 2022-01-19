import React, {useState} from 'react'

import { Form, Button, Container } from 'react-bootstrap'

import Navbar from '../component/Navbarr'

import {API} from "../config/api"

export default function AddArtist() {

    const [form, setForm] = useState({
        name: "",
        old: "",
        type: "",
        career: "",
    })

    const handleChange = (e) => {
        setForm([...e.target.name])
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                "Content-type": "application/json"
                }
            }

            const formData = new FormData()
            formData.set("title", form.title)
            formData.set("old", form.old)
            formData.set("type", form.type)
            formData.set("career", form.career)

            console.log(FormData)
            // const response = await API.post('/addartis', formData, config)
            // console.log(response)

            // const body = JSON.stringify({ name: category })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Navbar />
            <Container className="mt-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mt-5 d-flex justify-content-center" style={{color: "White", marginTop: "50px"}}>
                        <h3>Add Artist</h3>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Name" onChange={ handleChange }/>
                    </Form.Group>


                    <Form.Group className="mb-2" controlId="formBasicText">
                        <Form.Label>Old</Form.Label>
                        <Form.Control name ="old" type="text" placeholder="Old" onChange={ handleChange }/>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicText">
                        <Form.Label>Type</Form.Label>
                        <Form.Control name="type" type="text" placeholder="Solo" onChange={ handleChange }/>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicText">
                        <Form.Label>Start a Career</Form.Label>
                        <Form.Control name="career" type="text" placeholder="Start a Career" onChange={ handleChange }/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicPassword">
                        <Button variant="warning" type="submit">
                            Add Artist
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}
