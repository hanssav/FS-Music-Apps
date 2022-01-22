import React, { useState} from 'react'

import { Container, Form, Button } from 'react-bootstrap'

import Navbar from '../../component/Navbarr'
import "./pay.css"

import { useHistory } from 'react-router-dom'
import { API } from "../../config/api"

export default function Pay() {
    console.clear()

    const title = "Payment"
    document.title = "Music Apps " + title

    let history = useHistory()

    let [form, setForm] = useState({
        startDate: "",
        dueDate: "",
        userId: "",
        attache: "",
        accountNumber: "",
        status: ""

    })

    const handleChange = async (e) => {
        setForm({
            ...form,
             [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // const today = new Date();
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            // console.log(today);


            // const thirty_days_from_now = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)

            // console.log("today: " + today)

            // const Today = String(today)
            // console.log("nextDay: " + thirty_days_from_now)

            const config = {
                headers: {
                    "Content-type": "multipart/form-data",
                    // 'Accept' : 'application/json',
                }
            }

            const formData = new FormData();
            formData.set("startDate", today)
            formData.set("dueDate", today)
            formData.set("userId", 8)
            formData.set("attache", form.image[0], form.image[0].name)
            formData.set("accountNumber", form.accountNumber)
            formData.set("status", "pending")

            console.log(formData)
            const response = await API.post("/addpayment", formData, config)
            console.log(response.data)

            // history.push("/")
            // const dataPayment = await API.get("/getpayments")
            // console.log(dataPayment.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="main-pay">
            <Navbar />

            <Container className="my-5 pay d-flex flex-column align-items-center">
                <div className="text-center mb-5" style={{ color: "white" }}>
                    <h2 className="font-weight-bold py-4">Premium</h2>
                    <p className="font-weight-normal">Bayar sekarang dan nikmati streaming music yang kekinian dari
                        <span className='font-weight-bold'>
                            <span className="text-danger"> DUMB</span>SOUND
                        </span>
                    </p>
                    <h4 className="font-weight-bold"><span className="text-danger"> DUMB</span>SOUND : 0981312323</h4>
                </div>

                <div className='d-flex flex-column'>
                    <Form className="align-items-center" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className="bg-dark text-light" type="number" placeholder="Input Your Account Member" onChange={handleChange} name="accountNumber"/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="image">
                            <Form.Control className="bg-dark text-light" name="image" type="file" placeholder="Attache Thumbnail" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center">
                            <Button className="" variant="warning" type="submit" style={{width: "100%", backgroundColor: "#F58033"}}>
                                Send
                            </Button>
                        </Form.Group>

                    </Form>
                </div>
            </Container>
        </div>
    )
}
