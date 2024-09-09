import './AllTricks.css';
import Trick from '../Trick/Trick';

function AllTricks({ tricks }) {

    const trickCards = tricks.map(trick => {
        return (
            <Trick />
        )
    })

    return (
        <main className='all-tricks-section'>
            <Trick />
        </main>
    )
}

export default AllTricks;