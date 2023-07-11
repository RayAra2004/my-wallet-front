import { useContext, useEffect, useState } from "react"
import { Token } from "../resources/token.context"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SCItem, SCHome, SCHeader, SCRegistryBody, SCRegistry, SCBalance, SCTransaction } from "../styles/Home.style";

export default function Home(){

    const [token, setToken] = useContext(Token);
    const navigate = useNavigate();
    const [data, setData] = useState(undefined);
    const [value, setValue] = useState(0);
    const [sale, setSale] = useState(0);

    useEffect(() =>{
        const t = localStorage.getItem('token');
        setToken(t)

        if(t === '' || t === null){
            navigate('/');
            return;
        } 

        const config = {
            headers: {
                "Authorization": `${t}`
            }
        }


        axios.get(`${import.meta.env.VITE_API_URL}/transactions`, config)
            .then(res => {
                setData(res.data);
                calcValue(res.data);
            })
            .catch(res => alert(res.message))
    }, [])

    function fillName(){
        if(data === undefined) return <p data-test="user-name">Olá, Fulano</p>
        return <p data-test="user-name">Olá, {data.name}</p>
    }

    function registry(){
        if(data !== undefined){
            if(data.transactions.length !== 0){
                return(
                    data.transactions.map(transaction =>
                        <SCItem key={transaction._id} type={transaction.type}>
                            <p>{transaction.date}</p>
                            <span data-test="registry-name">{transaction.description}</span>
                            <p data-test="registry-amount">{(Number(transaction.value).toFixed(2)).replace('.', ',')}</p>
                        </SCItem>
                    )
                )
            }else{
                return <p data-test="registry-name">Não há registros de entrada ou saída</p>
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
                <ion-icon data-test="logout" name="exit-outline" onClick={logout}></ion-icon>
            </SCHeader>
            <SCRegistryBody>
                <SCRegistry>
                    {registry()}
                </SCRegistry>
                <SCBalance active={data} sale={value}>
                    <p>Saldo</p>
                    <p data-test="total-amount">{sale}</p>
                </SCBalance>
            </SCRegistryBody>
            <SCTransaction>
                <div data-test="new-income" onClick={()=> {navigate('/nova-transacao/entrada')}}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova<br/>entrada</p>
                </div>
                <div data-test="new-expense" onClick={()=> {navigate('/nova-transacao/saida')}}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova<br/>saída</p>
                </div>
            </SCTransaction>
        </SCHome>
    )
}