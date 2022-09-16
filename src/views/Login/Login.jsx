import React, { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { login } from '../../features/auth/authSlice';
import { setAccesTokenStorage } from '../../services/userService/localStorage';
import { loginUser } from '../../services/userService/user';
import style from "./Login.module.css"


const Login = ({ setToken }) => {
    const issetToken = useSelector(state => state.auth.user?.token);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        //check if user already authenticated return to /direbonjour
        if (issetToken) {
            navigate("/direbonjour")
        }
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        (async () => {
            const user = {
                email, password
            }
            await dispatch(login(user))
            navigate("/direbonjour")
        })()
    }, [dispatch, email, password]);
    return (
        <main className={style.login_main}>
            <div className={style.container}>
                <div >
                    <img src="asset/logo.png" alt="logo de oneSoft" title='logo de oneSoft' />
                </div>
                <div>
                    <h1 className={style.login_title}>Se connecter</h1>
                    <form onSubmit={handleSubmit} className={style.login_form}>
                        <div>
                            <input type="email" placeholder='veuillez rentrer une adresse mail' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type="password" placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button>Connexion</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login