import { useContext, useEffect } from "react"
import { styled } from "styled-components"
import { Token } from "../resources/token.context"
import { useNavigate } from "react-router-dom";

export default function Home(){

    const [token, setToken] = useContext(Token);
    const navigate = useNavigate();

    useEffect(() =>{

        setToken(localStorage.getItem('token'))
    }, [])

    const config = {
        headers: {
            "Authorization": `${token}`
        }
    }

    return(
        <SCHome>
            <SCHeader>
                <p>Olá, Fulano</p>
                <ion-icon name="exit-outline"></ion-icon>
            </SCHeader>
            <SCRegistryBody>
                <SCRegistry>
                    <p>Não há registros de entrada ou saída</p>      
                </SCRegistry>
                <SCBalance>
                    <p>Saldo</p>
                    <p> valor</p>
                </SCBalance>
            </SCRegistryBody>
            <SCTransaction>
                <div onClick={()=> {navigate('/nova-transacao/entrada')}}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova<br/>entrada</p>
                </div>
                <div onClick={()=> {navigate('/nova-transacao/saida')}}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova<br/>saída</p>
                </div>
            </SCTransaction>
        </SCHome>
    )
}

const SCHome = styled.div`
    height: 100svh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SCHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px;
    p{
        font-family: 'Raleway', cursive;
        font-size: 26px;
        line-height: 31px;
        font-weight: 700;
        color: #FFFFFF;
    }

    ion-icon{
        font-size: 30px;
        color: #FFFFFF;
    }
`

const SCRegistryBody = styled.div`
    background-color: #FFFFFF;
    width: 326px;
    height: 446px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    position: relative;
    
`
const SCRegistry = styled.div`
    overflow-y: scroll;
    p{
        font-family: 'Raleway', cursive;
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        color: #868686;
    }
`
const SCBalance = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    p{
        font-family: 'Raleway', cursive;
        font-size: 17px;
        line-height: 20px;
        font-weight: 700;
        color: #000000;
    }
`

const SCTransaction = styled.div`
    width: 326px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    div{
        width: 155px;
        height: 114px;
        background-color: #A328D6;
        border-radius: 5px;
        padding: 15px;

        ion-icon{
            color: #FFFFFF;
            font-size: 25px;
        }

        p{
            font-family: 'Raleway', cursive;
            font-size: 17px;
            line-height: 20px;
            font-weight: 700;
            color: #FFFFFF;
            margin-top: 25px;
        }
    }
`