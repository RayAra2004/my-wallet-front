import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { styled } from "styled-components";
import { Token } from "../resources/token.context";

export default function Transaction(){

    const {tipo} = useParams();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [token, setToken] = useContext(Token);
    const navigate = useNavigate();
    
    let text = 'entrada';
    if(tipo === 'saida') text = 'saída';

   
    const config = {
        headers: {
            "Authorization": `${token}`
        }
    }

    useEffect(() =>{

        setToken(localStorage.getItem('token'))
    }, [])

    function trasanction(e){
        e.preventDefault();

        const v = value.replace(',', '.');
        let t = text
        if(text === 'saída') t = 'saida'
        
        axios.post(`${import.meta.env.VITE_API_URL}transaction/${t}`, {value: v, description}, config)
            .then(res => navigate('/home'))
            .catch(res => console.log(res))
    }

    return(
        <SCTransaction>
            <p>Nova {text}</p>
            <form onSubmit={trasanction}>
                <input placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                <button>Salvar {text}</button>
            </form>

        </SCTransaction>
    )
}

const SCTransaction = styled.div`
    height: 100svh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-family: 'Raleway', cursive;
        font-size: 26px;
        line-height: 31px;
        font-weight: 700;
        color: #FFFFFF;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    form{
        width: 326px;

        input{
            border: none;
            border-radius: 5px;
            width: 100%;
            height: 58px;
            padding-left: 10px;
            margin-bottom: 20px;

            
        }

        input::placeholder{
            font-family: 'Raleway', cursive;
            font-size: 20px;
            line-height: 23px;
            font-weight: 400;
            color: #000000;
        }

        button{
            border: none;
            width: 100%;
            height: 46px;
            border-radius: 5px;
            background-color: #A328D6;
            color: #FFFFFF;
            font-family: 'Raleway', cursive;
            font-size: 20px;
            line-height: 23px;
            font-weight: 700;
        }
    }
`