import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux"

const Banner = () => {

    const user = useSelector(state => state.auth.user.user)

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ minHeight: "100px" }}>
                <Container>
                    <Navbar.Brand href="/direbonjour">OneSoft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`me-auto`}>
                            <Nav.Link href="/collaborateurs">collaborateur<span className="text-white"></span></Nav.Link>
                        </Nav>
                        {user.isAdmin &&
                            <Nav className={`me-auto`}>
                                <Nav.Link href="/ajoutercollaborateur">ajouter<span className="text-white"></span></Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <img src={user.photo} alt={user.lastname} />
                <p>{user.lastname} - {user.firstname}</p>
            </div>
        </header>
    )
}

export default Banner