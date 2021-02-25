import React, { useEffect, useState } from 'react'
// import linesJSON from '../../lines.json'
import { Container, Button } from '../globalStyles'
import { Paragraph, TheatreControls } from './Theatre-style'

function useData(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('../../../public/lines.json')
        .then(response=>response.json())
        .then(datos=> {
            setData(datos)
        })
        .catch(error=>error.message)

    }, [])
    
    return data
}

function TheatreLines(){
    const data = useData();

    const [count, setCount] = useState(0);
    const [line, setLine] = useState(data[count]);

    const nextClick =()=>{

        count < data.length-1 ?

        setCount(prevState=> {

            setLine( data[prevState+1] )
            return prevState+1

        }) :

        setCount(_=> {

            setLine( data[0] )
            return 0

        })

    }

    const prevClick= ()=>{

        count <= data.length && count > 0 ?

        setCount(prevState=>{

            setLine( data[prevState - 1] )
            return prevState - 1

        }) : 

        setCount(_=>{

            setLine( data[data.length - 1] )
            return data.length - 1

        })
    }

    return (
        <Container>

            <TheatreControls>
                <Button onClick={prevClick}>Previous</Button>
                <Button onClick={nextClick}>Next</Button>
            </TheatreControls>
            
            {

            data.map((item, index)=><Paragraph key={item} active={ index === count }>{item}</Paragraph>)
            
            }

        </Container>
        
    )
}

export default TheatreLines