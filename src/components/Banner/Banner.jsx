import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { RemoveFromLocalStorage } from '../../services/userService/localStorage';
import { useNavigate } from "react-router-dom"

const Banner = () => {

    const navigate = useNavigate()
    const user = useSelector(state => state.auth.user.user)
    const logOut = ()=>{
        RemoveFromLocalStorage();
        window.location.href = '/';
    }

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
                <Link to={`/modifierprofil/${user.id}`}><img src={user.photo} alt={user.lastname} /></Link>
                <p>{user.lastname} - {user.firstname}</p>
            </div>
            <button onClick={logOut}>Déconnexion</button>
        </header>
    )
}

export default Banner