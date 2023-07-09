import axios from "axios";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { Token } from "../resources/token.context";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useContext(Token);
    const navigate = useNavigate();

    function salvaToken(tokenDB){
        const t = `Bearer ${tokenDB}`;
        setToken(t);
        localStorage.setItem('token', t);
        navigate('/home');
    }

    function login(e){
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}sign-in`, {email, password})
            .then(res => salvaToken(res.data.token))
            .catch(res => alert(res.message))
    }

    return(
        <SCLogin>
            <div>
                <SCName>MyWallet</SCName>
                <SCFormLogin onSubmit={login}>
                    <input data-test="email" placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input data-test="password" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button data-test="sign-in-submit">Entrar</button>
                </SCFormLogin>
                <Link to={'/cadastro'}>
                    <SCTextSignUp>Primeira vez? Cadastre-se!</SCTextSignUp>
                </Link>
            </div>
        </SCLogin>
    )
}

const SCLogin = styled.div`
    background-color: #8C11BE;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SCName = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 40px;
`

const SCFormLogin = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        border-radius: 5px;
        width: 326px;
        height: 58px;
        border: none;
        margin-bottom: 10px;
        font-size: 20px;
    }

    input::placeholder{
        font-family: 'Raleway', cursive;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        padding-left: 5px;
    }

    button{
        border: none;
        border-radius: 5px;
        background-color: #A328D6;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        font-family: 'Saira Stencil One', cursive;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        width: 326px;
        height: 46px;
        margin-top: 5px;
        margin-bottom: 15px;
    }
`

const SCTextSignUp = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
    text-align: center;
`