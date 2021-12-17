import { useState } from 'react';
import Character from './components/character/Character';
import Controls from './components/controls/Controls';
import Catchphrase from './components/catchphrase/Catchphrase';
import './App.css';

function App() {
  const [head, setHead] = useState('duck');
  const [torso, setTorso] = useState('pink');
  const [pants, setPants] = useState('white');
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    setCatchphrases((prevState) => [...prevState, newCatchphrase]);
  };

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Design Your Scuffed Character!</h1>
          <Controls
            head={head}
            onHeadChange={setHead}
            torso={torso}
            onTorsoChange={setTorso}
            pants={pants}
            onPantChange={setPants}
            newCatchphrase={newCatchphrase}
            setCatchphrases={setNewCatchphrase}
            handleClick={handleClick}
          />
          <Catchphrase catchphrases={catchphrases} />
          <Character head={head} torso={torso} pants={pants} />
        </header>
      </main>
    </div>
  );
}

export default App;
