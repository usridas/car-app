import './App.css';
import { VinDecoder } from './components/VinDecoder';
import { TextInput } from './components/TextInput';
import React, { useState } from 'react';

function App() {
  const [vinResponses, setVinResponses] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <TextInput setVinResponses={setVinResponses}/>
        {vinResponses.length !== 0 && <VinDecoder vinResponses={vinResponses}/>}
      </header>
    </div>
  );
}

export default App;