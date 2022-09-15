import React, { useCallback, useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { login } from '../../features/auth/authSlice';
import { setAccesTokenStorage } from '../../services/userService/localStorage';
import { loginUser } from '../../services/userService/user';


const Login = ({ setToken }) => {
    const issetToken = useSelector(state => state.auth.user?.token);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        //check if user already authenticated return to /direbonjour
        if(issetToken) {
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
        <section>
            <h1>Se connecter</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='veuillez rentrer une adresse mail' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)} />
                <button>connexion</button>
            </form>
        </section>
    )
}

export default Login