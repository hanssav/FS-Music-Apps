import { React, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container, Image, Button, Dropdown} from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../context/UserContext';

import Logo from "../public/images/logo.png"
import TextLogo from "../public/images/textlogo.png"
import UserIcon from "../public/icons/imageUser.png"
import AdminIcon from "../public/icons/imageAdmin.png"
import PayIcon from "../public/icons/payIcon.png"
import MusicIcon from "../public/icons/musicIcons.png"
import LogoutIcon from "../public/icons/logoutIcon.png"
import ArtisIcon from "../public/icons/artisIcon.png"

import "./navbar.css"

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
                            <Image className='iconImage' src={UserIcon} roundedCircle style={{ width: '40px', height: '40px' }
                            } />} id="dropdown-menu-align-end" className='navDrop' align="end">
                        <NavDropdown.Item>
                            <Link to="/pay" onClick={""} className='profile d-flex align-items-center'>
                                <Image className='iconImage' src={PayIcon} thumbnail />
                                <h6 className='textLink'>Pay</h6>
                            </Link>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item>
                            <Link to="/" onClick={handleLogout} className='profile d-flex align-items-center'>
                                <Image className='iconImage' src={LogoutIcon} thumbnail />
                                <h6 className='textLink'>Logout</h6>
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
        <>
            <NavDropdown
                title={
                    <Image className='iconImage' src={AdminIcon} roundedCircle style={{ width: '40px', height: '40px' } 
                    } />} className="navDrop"
                    >
            {/* <NavDropdown align="end" title={<img src={Ava} width="50px" height="50px" alt="" className="rounded-circle" />} id="dropdown-menu-align-end"> */}
                <Dropdown.Item>
                    <Link to="/listtransactions" onClick={""} className='profile d-flex align-items-center'>
                        <Image className="iconImage" src={PayIcon} thumbnail />
                        <h6 className="textLink">List Transactions</h6>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/addmusic"
                        onClick={""}
                        className='profile d-flex align-items-center'>
                        <Image className="iconImage" src={MusicIcon} thumbnail />
                        <h6 className="textLink">Add Music</h6>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link to="/addartis" onClick={""} className='profile d-flex align-items-center'>
                        <Image className="iconImage" src={ArtisIcon} thumbnail />
                         <h6 className="textLink">Add Artis</h6>
                     </Link>
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item>
                    <Link to="/" onClick={handleLogout} className='profile d-flex align-items-center'>
                        <Image className="iconImage" src={LogoutIcon} thumbnail />
                        <h6 className="textLink"> Logout</h6>
                    </Link>
                </Dropdown.Item>
            </NavDropdown>
        </>
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
    // console.log(state)

    return (
        <Navbar expand="lg my-3 mx-3">
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
                        // <AdminNav />
                        // <UserNav />
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