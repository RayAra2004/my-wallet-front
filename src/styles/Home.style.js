import { styled } from "styled-components"

export const SCHome = styled.div`
    height: 100svh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SCHeader = styled.div`
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

export const SCRegistryBody = styled.div`
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
export const SCRegistry = styled.div`
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

export const SCItem = styled.div`
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

export const SCBalance = styled.div`
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
    background-color: #d7d7d7;
    p{
        font-family: 'Raleway', cursive;
        font-size: 17px;
        line-height: 20px;
        font-weight: 700;
        color: #000000;
    }

    :last-child{
        color: ${props => {
            if(props.sale >= 0){
                return '#03AC00'
            }else{
                return '#C70000'
            }
        }}
    }
`

export const SCTransaction = styled.div`
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