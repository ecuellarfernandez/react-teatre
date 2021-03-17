import styled, { createGlobalStyle} from 'styled-components'

export const Container = styled.div`
    margin: auto;
    width: min(90%, 62.5rem);
`

export const ButtonArrow = styled.button`
    width: 100%;
    height: 3.125rem;
    border:none;
    cursor:pointer;
    background-color:lightgray;
`

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0; padding:0;
        box-sizing:border-box;
    }
    body{
        user-select:none;
        font-family: system-ui;
    }
`