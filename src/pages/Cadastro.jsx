import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Cadastro(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();

        if(password !== confirmPassword){
            alert("As senhas devem ser iguais");
            return;
        }
        
        axios.post(`${import.meta.env.VITE_API_URL}sign-up`, {name, email, password})
            .then(res => navigate('/'))
            .catch(res => alert(res.message))
    }

    return(
        <SCSignUp>
            <div>
                <SCName>MyWallet</SCName>
                <SCFormSignUp onSubmit={cadastrar}>
                    <input data-test="name" placeholder="Nome" value={name} onChange={ e => setName(e.target.value)}/>
                    <input data-test="email" placeholder="E-mail" type="email" value={email} onChange={ e => setEmail(e.target.value)}/>
                    <input data-test="password" placeholder="Senha" type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
                    <input data-test="conf-password" placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}/>
                    <button data-test="sign-up-submit">Cadastrar</button>
                </SCFormSignUp>
                <Link to={'/'}>
                    <SCTextSignIn>Já tem conta? Entre agora!</SCTextSignIn>
                </Link>
            </div>
        </SCSignUp>
    )
}

const SCSignUp = styled.div`
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

const SCFormSignUp = styled.form`

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

const SCTextSignIn = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
    text-align: center;
`