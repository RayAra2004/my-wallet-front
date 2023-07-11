import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SCSignUp, SCName, SCFormSignUp, SCTextSignIn } from "../styles/Cadastro.style";


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
        
        axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, {name, email, password})
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
