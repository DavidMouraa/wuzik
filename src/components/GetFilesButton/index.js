import "./styles.css";
import "./keyframes.css";

import { useRef } from "react";

import AddIcon from "../../Icons";

const GetFilesButton = (props) => {
    const {getAudioFiles} = props;

    const getFilesLabelDivRef = useRef(null);

    const switchLabelClickAnimation = () => {
        getFilesLabelDivRef.current.classList.toggle("label-click-animation");
    }

    return (
        <div >
            <label 
            htmlFor="files-button"
            id="get-files-label">
                <div
                ref={getFilesLabelDivRef}
                onClick={switchLabelClickAnimation}
                onAnimationEnd={switchLabelClickAnimation}>
                    <AddIcon />
                </div>
            </label>
            <input 
            id="files-button"
            type="file"
            onChange={getAudioFiles}
            multiple/>
        </div>
    );
}

export default GetFilesButton;
