import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { RemoveFromLocalStorage } from '../../services/userService/localStorage';
import { useNavigate } from "react-router-dom"
import { logOut, responsiveNb } from '../../services/utils/utils';
import style from "./Banner.module.css"

const Banner = () => {

    const navigate = useNavigate()
    const user = useSelector(state => state.auth.user.user)

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    // const [click, setClick] = useState(false)
    // const NvResponsive = () => {
    //     responsiveNb();
    //     setClick(!click);
    // }

    return (
        <header>
            <div className={`container ${style.nab_bar}`}>
                <div>
                    <Link to={`/direbonjour`} className={`${style.nav_brand}`}>
                        <img src="/asset/logo.png" alt="logo de OneSoft" style={{ width: 80 }} />
                        <span>Intranet</span>
                    </Link>
                </div>
                <nav className={`${style.nab_bar_nav}${click? ` ${style.responsive}`:""}`} id='burger'>
                    
                    <button className={`text-center ${style.burgur}`} onClick={handleClick}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
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
                    <Link to={`/modifierprofil/${user.id}`}><img src={user.photo} alt={user.lastname} style={{ width: 50 }} /></Link>
                    <button onClick={logOut}>Déconnexion</button>
                </div>
            </div>
        </header>
    )
}

export default Banner