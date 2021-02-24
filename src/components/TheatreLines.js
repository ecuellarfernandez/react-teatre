import lines from '../lines.json'

function TheatreLines(){

    return (
        <div>
            {
                lines.map(line=> <p>{line}</p>)
            }
        </div>
    )
}

export default TheatreLines