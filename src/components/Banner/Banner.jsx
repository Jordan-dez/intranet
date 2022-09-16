import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { RemoveFromLocalStorage } from '../../services/userService/localStorage';
import { useNavigate } from "react-router-dom"
import { logOut } from '../../services/utils/utils';
import style from "./Banner.module.css"

const Banner = () => {

    const navigate = useNavigate()
    const user = useSelector(state => state.auth.user.user)

    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ minHeight: "100px" }}>
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
                
                <p>{user.lastname} - {user.firstname}</p>
            </div>
            <button onClick={logOut}>Déconnexion</button> */}
    return (
        <header>
            <div className={`container ${style.nab_bar}`}>
                <div>
                    <Link to={`/direbonjour`} className={`${style.nav_brand}`}>
                        <img src="asset/logo.png" alt="logo de OneSoft" style={{ width: 80 }} />
                        <span>Intranet</span>
                    </Link>
                </div>
                <nav className={`${style.nab_bar_nav}`}>
                    <ul className="unstyle">
                        <li className={`${style.nav_link}`}>
                            <Link to={`/collaborateurs`}>
                                Collaborateurs
                            </Link>
                        </li>
                        {user.isAdmin &&
                            <li className={`${style.nav_link}`}>
                                <Link to={`/ajoutercollaborateur`}>
                                    Nouveau Collaborateur
                                </Link>
                            </li>
                        }
                    </ul>
                </nav>
                <div className={style.user_link}>
                    <Link to={`/modifierprofil/${user.id}`}><img src={user.photo} alt={user.lastname} style={{width:50}} /></Link>
                    <button onClick={logOut}>Déconnexion</button>
                </div>
            </div>
        </header>
    )
}

export default Banner