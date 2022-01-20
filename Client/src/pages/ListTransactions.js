import React from 'react'

import { Container, Table, Dropdown } from 'react-bootstrap'

import Navbar from '../component/Navbarr'

function DropDown() {
    return (
        <Dropdown>
            <Dropdown.Toggle style={{backgroundColor: "rgba(76, 175, 80, 0)"}}
            id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" style={{color: "green"}}>Aproved</Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color: "red"}}>Cancel</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default function ListTransactions() {
    return (
        <>
            <Navbar />
            <Container style={{ marginTop: "100px" }}>

                <Table variant="dark" striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Users</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status User</th>
                        <th>Status User</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td><DropDown /></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
