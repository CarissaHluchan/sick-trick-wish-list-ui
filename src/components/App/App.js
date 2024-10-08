import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getTricks, postTricks } from '../../APIcalls';
import AllTricks from '../AllTricks/AllTricks';
import Form from '../Form/Form'



function App() {

  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    getTricks()
      .then(data => {
        console.log(data, "DATA HERE!")
        setTricks(data)
      })
      .catch(err => {
        console.log(err, 'ERR HERE!')
      });
  }, []);

    useEffect(() => {
      postTricks()
        .then(data => {
          addTricks(data)

        })
        .catch(err => {
          console.log(err)
        })
    })

  function addTricks(newTrick) {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTricks={addTricks} postTricks={postTricks}/>
      {!tricks.length && <p>This are no tircks, add some!</p>}
      <AllTricks tricks={tricks}/>
    </div>
  );
}

export default App; 
