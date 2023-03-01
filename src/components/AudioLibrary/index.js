// Componente que adiciona audios e os renderiza na tela

import "./styles.css";

import { useEffect, useRef, useState } from "react";

import GetFilesButton from "../GetFilesButton";
import RenderAudio from "../RenderAudio";

const AudioLibrary = (props) => {
    const {audioList, getAudioFiles} = props;

    const [warningDragState, setWarningDragState] = useState("desactive");
    const [warningVisibilite, setWarningVisibilite] = useState("visible");
    const [audioListVisibilite, setAudioListVisibilite] = useState("visible");

    const audioLibraryRef = useRef(null);

    // Muda a classe da tela de aviso
    const changeWarningDragState = (event) => {
        event.preventDefault();

        const isOnMe = audioLibraryRef.current.contains(event.target);

        if (isOnMe) {setWarningDragState("active")}
    }

    useEffect(() => {
        setWarningDragState("desactive");

        setWarningVisibilite(audioList.length !== 0 ? "invisible" : "visible");
        setAudioListVisibilite(audioList.length !== 0 ? "visible" : "invisible");

        console.log(audioList);
    }, [audioList]);

    useEffect(() => {
        document.addEventListener("dragover", changeWarningDragState);
    });

    return (
        <div 
        ref={audioLibraryRef}
        id="audio-library"
        onDragLeave={() => setWarningDragState("desactive")}
        onDrop={getAudioFiles}>
            <div 
            id="empty-audio-library-warning"
            className={`${warningDragState} ${warningVisibilite}`}>
                <p>Arraste os arquivos aqui ou...</p>
                <GetFilesButton 
                getAudioFiles={getAudioFiles}/>
            </div>

            <div 
            id="audio-list"
            className={audioListVisibilite}>
                {audioList.map((audio, index) => (
                    <RenderAudio
                    key={index}
                    audio={audio}/>
                ))}
            </div>
        </div>
    );
}

export default AudioLibrary;
