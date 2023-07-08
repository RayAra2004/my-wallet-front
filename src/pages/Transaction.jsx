import { useParams } from "react-router-dom"
import { styled } from "styled-components";

export default function Transaction(){

    const {tipo} = useParams();
    
    let text = 'entrada';
    if(tipo === 'saida') text = 'saída';

    return(
        <SCTransaction>
            <p>Nova {text}</p>
            <form>
                <input placeholder="Valor"/>
                <input placeholder="Descrição"/>
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