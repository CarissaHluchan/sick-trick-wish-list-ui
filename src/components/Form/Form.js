import './Form.css';
import { useState } from 'react';


function Form({ addTricks }) {

    const [] = useState()


    return (
        <form>
            <select>
                <option value='choose your stance'>Choose your Stance</option>
                <option value='regular'>Regular</option>
                <option value='switch'>Switch</option>
            </select>
            <imput>Name of Trick</imput>
            <select>
                <option value='choose your stance'>Choose your Obstacle</option>
                <option value='flat ground'>Flat Ground</option>
                <option value='stairs'>Stairs</option>
                <option value='ledge'>Ledge</option>
            </select>
            <input>Link to Tutorial</input>
            <button>Send it!</button>
        </form>
    )
}

export default Form;