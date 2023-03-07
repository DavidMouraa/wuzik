import "./styles.css";
import "./keyframes.css";

import { CheckIcon, CrossIcon, InfoIcon, RenameIcon } from "../../Icons";

import { useEffect, useRef, useState } from "react";

import formatMilliseconds from "../../javascript/formatMilliseconds";

import OptionsButton from "../OptionsButton";
import RenameAudio from "../RenameAudio";

const RenderAudio = (props) => {
    const {audioList, setAudioList, file, setPropertyVisibilite, setPropertyFile} = props;
    const {name, audio, setDuration} = file;

    const [audioDuration, setAudioDuration] = useState();
    const [displayName, setDisplayName] = useState(name);

    const audioRef = useRef(null);
    const renameAudioRef = useRef(null);
    const renameAudioOptionRef = useRef(null);

    // Remove o audio da lista de audios
    const removeAudio = () => {
        setAudioList(audioList.filter((i) => i !== file));
    }

    const switchDisplayName = (event) => {
        event.preventDefault();

        const wasOnMe = renameAudioRef.current.contains(event.target) || renameAudioOptionRef.current.contains(event.target);

        if (!wasOnMe && displayName !== name) {
            setDisplayName(name);
        }
    }

    useEffect(() => {
        audio.addEventListener("canplaythrough", () => setAudioDuration(formatMilliseconds(audio.duration)));
    }, [audio]);

    useEffect(() => {
        setDuration(audioDuration);
    }, [audioDuration, setDuration]);

    useEffect(() => {
        const handleClick = (event) => {
            if (renameAudioRef.current) {
                switchDisplayName(event);
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    });

    return (
        <div 
        ref={audioRef}
        id="box-audio"
        className="render-audio">
            <div className="box-audio-corner box-audio-corner-right">
                <div className="check-box"><CheckIcon /></div>
                <span 
                ref={renameAudioRef} className="audio-name">{displayName}</span>
            </div>

            <div className="box-audio-corner box-audio-corner-left">
                <span className="audio-duration monospace">{audioDuration}</span>
                <OptionsButton>
                    <li 
                    onClick={removeAudio}>
                        <CrossIcon />
                        Remover
                    </li>

                    <li
                    ref={renameAudioOptionRef}
                    onClick={() => {
                        setDisplayName(<RenameAudio 
                            oldName={name} 
                            setFileName={file.setFileName}
                            setDisplayName={setDisplayName} />);
                    }}>
                        <RenameIcon />
                        Renomear
                    </li>

                    <li 
                    onClick={() => {
                        setPropertyVisibilite("property-visible");
                        setPropertyFile(file);
                    }}>
                        <InfoIcon />
                        Propriedades
                    </li>
                </OptionsButton>
            </div>
        </div>
    );
}

export default RenderAudio;
