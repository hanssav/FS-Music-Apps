import { React, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, NavDropdown } from 'react-bootstrap'
// import { Image, Dropdown, Container, Nav, NavDropdown } from 'react-bootstrap'

import Logo from "../public/images/logo.png"
import TextLogo from "../public/images/textlogo.png"

import {Navbar, Nav, NavDropdown, Container, Image, Button} from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";

import { UserContext } from '../context/UserContext'

function UserNav() {
    const [, dispatch] = useContext(UserContext)
    let history = useHistory();

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        });
        history.push('/')
    }

    return (
        <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown
                        title={
                            <Image src={""} roundedCircle style={{ width: '40px', height: '40px' }
                            } />}
                        id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to="/pay" onClick={""} className='profile d-flex'>
                                <Image src={""} thumbnail style={{ height: '30px', }} />
                                <h6 style={{color: "black"}}>Pay</h6>
                            </Link>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item>
                            <Link to="/" onClick={handleLogout} className='profile'>
                                <Image src={""} thumbnail style={{ height: '30px' }} /> Logout
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </div>
    )
}

function AdminNav() {
    const [, dispatch] = useContext(UserContext)
    let history = useHistory()

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        });
        history.push('/')
    }

    return (
        <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown
                        title={
                            <Image src={""} roundedCircle style={{ width: '40px', height: '40px' }
                            } />}
                        id="basic-nav-dropdown">

                        <NavDropdown.Item>
                            <Link to="/listtransactions" onClick={""} className='profile d-flex'>
                                <Image src={""} thumbnail style={{ height: '30px', }} />
                                <h6 style={{color: "black"}}>List Transactions</h6>
                            </Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Link to="/addmusic"
                                onClick={""}
                                className='profile d-flex'>
                                <Image src={""} thumbnail style={{ height: '30px', }} />
                                <h6 style={{color: "black"}}>Add Music</h6>
                            </Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Link to="/addartis" onClick={""} className='profile d-flex'>
                                <Image src={""} thumbnail style={{ height: '30px', }} />
                                <h6 style={{color: "black"}}>Add Artis</h6>
                            </Link>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item>
                            <Link to="/" onClick={handleLogout} className='profile'>
                                <Image src={""} thumbnail style={{ height: '30px' }} /> Logout
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </div>
    )
}

function GuestPage() {
    return (
        <div>
            <Link to="/login">
                <Button className="mr-3" variant="outline-light">Login</Button>
            </Link>
            <Link to="/register">
                <Button variant="warning" style={{color: "white", backgroundColor:"#EE4622", border: "#EE4622"}}>Register</Button>
            </Link>
        </div>
    )
}

function Navbarr() {
    const [state] = useContext(UserContext)
    console.log(state)

    return (
        <Navbar expand="lg my-3">
            <Container fluid className="d-flex justify-content-between mx-5" style={{}}>
                <div>
                    <Link to="/" className='logo'>
                        <Navbar.Brand style={{ color: "white" }} href="#home">
                            <Image src={Logo} thumbnail style={{ height: '30px' }} />
                            <Image src={TextLogo} thumbnail style={{ height: '30px'}} />
                        </Navbar.Brand>
                    </Link>
                </div>

                <div className='mr-4'>
                    {!state.isLogin ? (
                        <GuestPage />
                    ) : (
                        state.user.listAs === "1" ? (
                            <AdminNav />
                        ) : (
                            <UserNav />
                        )
                    )}
                </div>
            </Container>
        </Navbar>
    )
}

export default Navbarr