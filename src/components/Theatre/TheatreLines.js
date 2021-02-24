import lines from '../../lines.json'
import { Container } from '../globalStyles'
import { Paragraph } from './Theatre-style'

function TheatreLines(){

    return (
        <Container>
            {
                lines.map(line=> <Paragraph> { line}  </Paragraph>)
            }
        </Container>
    )
}

export default TheatreLines