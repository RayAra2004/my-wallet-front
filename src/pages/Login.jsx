import axios from "axios";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Token } from "../resources/token.context";
import { SCLogin, SCName, SCFormLogin, SCTextSignUp } from "../styles/Login.style";

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

        axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, {email, password})
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
