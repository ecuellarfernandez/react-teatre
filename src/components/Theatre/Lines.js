import { Paragraph } from "./Theatre-style";

export default function Lines({ dataLines, currentLine }){
    return (
        <div>

           {dataLines.map
           ((item)=>
           <Paragraph
           key={item}
           active={ currentLine === item }
           > { item } </Paragraph>)}

            <hr/>
            <Paragraph>Line: {currentLine}</Paragraph> 

        </div>
    )
}