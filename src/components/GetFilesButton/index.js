import "./styles.css";
import "./keyframes.css";

import { useRef } from "react";

import { AddIcon } from "../../Icons";

import Button from "../Button";

const GetFilesButton = (props) => {
    const {getAudioFiles} = props;

    return (
        <div >
            <label 
            htmlFor="files-button"
            id="get-files-label">
                <Button>
                    <AddIcon />
                </Button>
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
