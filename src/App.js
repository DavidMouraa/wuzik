import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import CreateAudio from './javascript/createAudio';

import Home from './pages/Home';

function App() {
  const [audioList, setAudioList] = useState([]);

  // Pega os arquivos de audio que o usuario arrastou ou selecionou
  const getAudioFiles = (event) => {
    event.preventDefault();

    const files = event.target.files || event.dataTransfer.files;
    const audioFiles = checkIfIsAudioFile(files);

    setAudioList(audioList.concat([...audioFiles]));
  }

  // Verifica e filtra os arquivos de audio validos
  const checkIfIsAudioFile = (files) => {
    let audioFiles = [];

    for (let i = 0; i < files.length; i++) {
        const name = files[i].name;
        const dotIndex = name.lastIndexOf(".");
        const format = name.slice(dotIndex, name.length);

        if (format === ".mp3" || format === ".wav") {
            const audio = new CreateAudio(files[i]);
            audioFiles.push(audio);
        }
    }

    return audioFiles;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home 
        audioList={audioList}
        getAudioFiles={getAudioFiles}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
