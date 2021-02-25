import styled from 'styled-components'
import { Container } from '../globalStyles'

export const TheatreCard = styled(Container)`
    margin:5% auto;
    display:grid;
    place-content:center;

    grid-template-columns: 1fr 50px;
    grid-template-rows:auto;
    `

export const Paragraph = styled.p`
    font-size: 1.875rem;
    color: hsl(0, 0%, 13%);
    margin-bottom: 1.5rem;

    background-color: ${props=> props.active && 'lightgray'}
`
export const TheatreControls = styled.div`
    & > button{
        font-size: 1.25rem;
    }

    & > button{
        margin:0 0 .313rem .313rem;
    }

`