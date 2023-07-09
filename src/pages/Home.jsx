import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { Token } from "../resources/token.context"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home(){

    const [token, setToken] = useContext(Token);
    const navigate = useNavigate();
    const [data, setData] = useState(undefined);
    const [value, setValue] = useState(0);
    const [sale, setSale] = useState(0);

    useEffect(() =>{
        const t = localStorage.getItem('token');
        setToken(t)
        

        const config = {
            headers: {
                "Authorization": `${t}`
            }
        }


        axios.get(`${import.meta.env.VITE_API_URL}transactions`, config)
            .then(res => {
                setData(res.data);
                calcValue(res.data);
            })
            .catch(res => alert(res.message))
    }, [])

    function fillName(){
        if(data === undefined) return <p>Olá, Fulano</p>
        return <p>Olá, {data.name}</p>
    }

    function registry(){
        if(data !== undefined){
            if(data.transactions.length !== 0){
                return(
                    data.transactions.map(transaction =>
                        <SCItem key={transaction._id} type={transaction.type}>
                            <p>{transaction.date}</p>
                            <span> {transaction.description}</span>
                            <p>{(Number(transaction.value).toFixed(2)).replace('.', ',')}</p>
                        </SCItem>
                    )
                )
            }else{
                return <p>Não há registros de entrada ou saída</p>
            }
        }
         
    }

    function calcValue(d){
        let val = 0;
        d.transactions.forEach(element => {
            if(element.type === "entrada"){
                val += Number(element.value);
            }else{
                val -= Number(element.value);
            }
        });
        setValue(val);
        setSale(String(val).replace('.', ','))
    }

    function logout(){
        setToken('');
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <SCHome>
            <SCHeader>
                {fillName()}
                <ion-icon name="exit-outline" onClick={logout}></ion-icon>
            </SCHeader>
            <SCRegistryBody>
                <SCRegistry>
                    {registry()}
                </SCRegistry>
                <SCBalance active={data} sale={value}>
                    <p>Saldo</p>
                    <p>{sale}</p>
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
    width: 100%;
    p{
        font-family: 'Raleway', cursive;
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        color: #868686;
    }
`

const SCItem = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 10px;
    :first-child{
        font-family: 'Raleway', cursive;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        color: #C6C6C6;
        width: 60px;
        margin-left: 5px;
    }

    span{
        font-family: 'Raleway', cursive;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        color: #000000;
        width: 200px;
    }

    :last-child{
        font-family: 'Raleway', cursive;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        margin-right: 10px;
        color: ${props => {
            if(props.type === 'saida'){
                return '#C70000'
            }else{
                return '#03AC00'
            }
        }};
    }
`

const SCBalance = styled.div`
    display: ${props => { //TODO: Errado, quando não tem transação
        if(props.active !== undefined){
            if(props.active.transactions === 0){ 
                return 'none'
            }else{
                return 'flex'
            }
        }
        }};
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

    :last-child{
        color: ${props => {
            console.log(props.value)
            if(props.value >= 0){
                return '#03AC00'
            }else{
                return '#C70000'
            }
        }}
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