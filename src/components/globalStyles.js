import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    margin-inline: auto;
    width: min(90%, 62.5rem);
`

export const Button = styled.button`
    width: 100%;
    height: 3.125rem;
`

export const GlobalStyle = createGlobalStyle`
    body{
        user-select:none;
        font-family: system-ui;
    }
`