import "./styles.css";
import "./keyframes.css";

import { CheckIcon, CrossIcon, InfoIcon } from "../../Icons";

import { useEffect, useRef, useState } from "react";

import formatMilliseconds from "../../javascript/formatMilliseconds";

import OptionsButton from "../OptionsButton";

const RenderAudio = (props) => {
    const {audioList, setAudioList, file, setPropertyVisibilite, setPropertyFile} = props;
    const {name, audio, setDuration} = file;

    const [audioDuration, setAudioDuration] = useState();

    const audioRef = useRef(null);

    // Remove o audio da lista de audios
    const removeAudio = () => {
        setAudioList(audioList.filter((i) => i !== file));
    }

    useEffect(() => {
        const handleCanPlayThrough = () => {
            setAudioDuration(formatMilliseconds(audio.duration));
        }

        audio.addEventListener("canplaythrough", handleCanPlayThrough);

        return () => audio.removeEventListener("canplaythrough", handleCanPlayThrough);
    }, [audio]);

    useEffect(() => {
        setDuration(audioDuration);
    }, [audioDuration, setDuration]);

    return (
        <div 
        ref={audioRef}
        id="box-audio"
        className="render-audio">
            <div className="box-audio-corner box-audio-corner-right">
                <div className="check-box"><CheckIcon /></div>
                <span className="audio-name">{name}</span>
            </div>

            <div className="box-audio-corner box-audio-corner-left">
                <span className="audio-duration monospace">{audioDuration}</span>
                <OptionsButton>
                    <li onClick={removeAudio}>
                        <CrossIcon/>
                        Remover
                    </li>

                    <li 
                    onClick={() => {
                        setPropertyVisibilite("property-visible");
                        setPropertyFile(file);
                    }}>
                        <InfoIcon/>
                        Propriedades
                    </li>
                </OptionsButton>
            </div>
        </div>
    );
}

export default RenderAudio;
