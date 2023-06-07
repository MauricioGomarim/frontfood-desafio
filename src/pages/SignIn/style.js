import styled from 'styled-components'
import logo from '../../assets/logo.png'


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 100vh;
    

    >img {
        object-fit: contain;
        width: 50%;
    }

`

export const Form = styled.form`
    width: 50%;
    max-width: 550px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 30px;
    border-radius: 16px;

    > h1 {
        text-align: center;
        font-family: 'Poppins';
        color: white;
        font-weight: 500;
        font-size: 32px;
    }

`

export const Logo = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`
