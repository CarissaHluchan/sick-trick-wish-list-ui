import './AllTricks.css';
import Trick from '../Trick/Trick';

function AllTricks({ tricks }) {

    const trickCards = tricks.map(trick => {
        return (
            <Trick
            key={trick.id} 
            id={trick.id}
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            />
        )
    })

    return (
        <main className='all-tricks-section'>
            {trickCards}
        </main>
    )
}

export default AllTricks;