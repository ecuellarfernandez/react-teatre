import React, { useEffect, useState } from 'react'
import { Container, Button } from '../globalStyles'
import { TheatreCard ,Paragraph, TheatreControls } from './Theatre-style'

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

function Controls({ handlePrev, handleNext }){
    return(

        <TheatreControls>
            <Button onClick={handlePrev}>&#8593;</Button>
            <Button onClick={handleNext}>&#8595;</Button>
        </TheatreControls>

    )
}

function Lines({ dataLines, currentLine }){
    return (
        <div>

           {dataLines.map
           ((item)=>
           <Paragraph
           key={item}
           active={ currentLine === item }
           > { item } </Paragraph>)}

        </div>
    )
}


function Theatre(){
    const data = useData();

    const [count, setCount] = useState(0);
    const [line, setLine] = useState([]);

    useEffect(()=>{
        setLine( data[count] )
    })

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

        <div>

        <TheatreCard>

            <Lines
                dataLines={data}
                currentLine={line}
            />

            <Controls
                handlePrev={ prevClick }
                handleNext={ nextClick }
            />

        </TheatreCard>

        <Container>
            <hr/>
            <Paragraph>Line: {line}</Paragraph> 
        </Container>

        </div>
    )
}

export default Theatre