import styled from 'styled-components'

export const Paragraph = styled.p`
    font-size: 1.875rem;
    color: hsl(0, 0%, 13%);

    background-color: ${props=> props.active && 'red'}
`
export const TheatreControls = styled.div`
    & > button{
        font-size: 1.25rem
    }
    display:flex;
`