import { Fragment, useEffect, useState } from 'react';
import { fetchDataHelper } from '../utils/fetchData';
import { ButtonArrow, GlobalStyle } from './globalStyles';
import Lines from './Theatre/Lines';
import { TheatreCard, TheatreControls } from './Theatre/Theatre-style';

export default () => {
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

    const handleNextClick =()=>{

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

    const handlePrevClick= ()=>{

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

            <GlobalStyle />

            <TheatreCard>

                <Lines
                    dataLines={data}
                    currentLine={line}
                />

                <TheatreControls>
                    <ButtonArrow onClick={handlePrevClick}>&#8593;</ButtonArrow>
                    <ButtonArrow onClick={handleNextClick}>&#8595;</ButtonArrow>
                </TheatreControls>

            </TheatreCard>
            
        </Fragment>
    );
};