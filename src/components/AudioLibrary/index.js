// Componente que adiciona audios e os renderiza na tela

import "./styles.css";

import { useEffect, useRef, useState } from "react";

import GetFilesButton from "../GetFilesButton";
import RenderAudio from "../RenderAudio";
import AudioLibraryOptions from "../AudioLibraryOptions";

const AudioLibrary = (props) => {
    const {audioList, setAudioList, getAudioFiles} = props;

    const [warningDragState, setWarningDragState] = useState("desactive");
    const [warningVisibilite, setWarningVisibilite] = useState("visible");
    const [audioListVisibilite, setAudioListVisibilite] = useState("visible");
    const [allFileSelected, setAllFileSelected] = useState(false);

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
                getAudioFiles={getAudioFiles} />
            </div>

            <div 
            id="audio-list"
            className={audioListVisibilite}>
                <AudioLibraryOptions
                setAllFileSelected={setAllFileSelected}
                allFileSelected={allFileSelected}
                audioList={audioList}
                setAudioList={setAudioList} />

                {audioList.map((file, index) => (
                    <RenderAudio
                    key={index}
                    file={file}
                    audioList={audioList}
                    setAudioList={setAudioList}
                    propertyVisibilite={props.propertyVisibilite}
                    setPropertyVisibilite={props.setPropertyVisibilite}
                    setPropertyFile={props.setPropertyFile}
                    allFileSelected={allFileSelected} />
                ))}
            </div>
        </div>
    );
}

export default AudioLibrary;
