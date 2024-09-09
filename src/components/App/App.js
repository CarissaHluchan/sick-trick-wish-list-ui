import './App.css';
import React from 'react';
import { getTricks } from '../../APIcalls';
import AllTricks from '../AllTricks/AllTricks';



function App() {
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <AllTricks />
    </div>
  );
}

export default App; 
