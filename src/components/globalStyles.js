import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    margin-inline: auto;
    width: min(90%, 62.5rem);
`

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: system-ui;
    }
`