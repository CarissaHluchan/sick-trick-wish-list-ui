import './Form.css';
import { useState } from 'react';


function Form({ addTricks, postTricks }) {

    const [stance, setStance] = useState('');
    const [name, setName] = useState('');
    const [obstacle, setObstacle] = useState('');
    const [tutorial, setTutorial] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTrick = { stance, name, obstacle, tutorial }
        addTricks(newTrick);
        setStance('');
        setName('');
        setObstacle('');
        setTutorial('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <select
                className='stance'
                value={stance}
                onChange={(event => { setStance(event.target.value) })}
            >
                <option value='' disabled>Choose your Stance</option>
                <option value='regular'>Regular</option>
                <option value='switch'>Switch</option>
            </select>

            <input
                className='name'
                type='text'
                placeholder='Name of Trick'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <select
                classname='obstacle'
                value={obstacle}
                onChange={(event => { setObstacle(event.target.value) })}
            >
                <option value='' disabled>Choose your Obstacle</option>
                <option value='flat ground'>Flat Ground</option>
                <option value='stairs'>Stairs</option>
                <option value='ledge'>Ledge</option>
            </select>

            <input
                className='tutorial'
                type='text'
                placeholder='Link to Tutorial'
                value={tutorial}
                onChange={(event) => setTutorial(event.target.value)}
            />

            <button type='submit' onClick={postTricks}>Send it!</button>
        </form>
    )
}

export default Form;