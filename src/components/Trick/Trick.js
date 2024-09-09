import './Trick.css';

function Trick({ stance, name, obstacle, tutorial}) {

    return (
       <div className='trick-card'>
            <h2 className='stance'>{stance}</h2>
            <h3>{name}</h3>
            <p className='obsticle'>Obstacle: {obstacle}</p>
            <p>Link to Tutorial:</p>
            <a>{tutorial}</a>
       </div>
    )
}

export default Trick;