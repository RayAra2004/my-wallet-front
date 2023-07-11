import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Token } from "../resources/token.context";
import { SCTransaction } from "../styles/Transaction.style";

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
        if(localStorage.getItem('token') === null){
            navigate('/');
            return;
        } 

        setToken(localStorage.getItem('token'))
    }, [])

    function trasanction(e){
        e.preventDefault();

        const v = value.replace(',', '.');
        let t = text
        if(text === 'saída') t = 'saida'
        
        axios.post(`${import.meta.env.VITE_API_URL}/transaction/${t}`, {value: v, description}, config)
            .then(res => navigate('/home'))
            .catch(res => alert(res.message))
    }


    return(
        <SCTransaction>
            <p>Nova {text}</p>
            <form onSubmit={trasanction}>
                <input data-test="registry-amount-input" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <input data-test="registry-name-input" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
                <button data-test="registry-save">Salvar {text}</button>
            </form>
        </SCTransaction>
    )
}