import { styled } from "styled-components"

export const SCLogin = styled.div`
    background-color: #8C11BE;
    height: 100svh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SCName = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 40px;
`

export const SCFormLogin = styled.form`

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

export const SCTextSignUp = styled.p`
    font-family: 'Saira Stencil One', cursive;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: #FFFFFF;
    text-align: center;
`