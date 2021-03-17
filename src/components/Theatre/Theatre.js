import React, { Fragment, useEffect, useState } from 'react'
import { Container, Button } from '../globalStyles'
import { TheatreCard ,Paragraph, TheatreControls } from './Theatre-style'
import { fetchDataHelper } from '../../utils/fetchData';

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

    const [count, setCount] = useState(0);
    const [line, setLine] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchDataHelper('../../../public/lines.json')
        .then(response=>{
            setData( response )
            setLine( data[count] )
        })
    }, [line])

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

        <Fragment>

        <TheatreCard>

            <Lines
                dataLines={data}
                currentLine={line}
            />

            <TheatreControls>
                <Button onClick={prevClick}>&#8593;</Button>
                <Button onClick={nextClick}>&#8595;</Button>
            </TheatreControls>

        </TheatreCard>

        <Container>
            <hr/>
            <Paragraph>Line: {line}</Paragraph> 
        </Container>

        </Fragment>
    )
}

export default Theatre