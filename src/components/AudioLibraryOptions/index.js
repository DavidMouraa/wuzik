import "./styles.css";

import Checkbox from "../Checkbox";
import { useEffect } from "react";

const AudioLibraryOptions = (props) => {
    const {allFileSelected, setAllFileSelected, checkboxRef} = props;

    useEffect(() => {

    });

    return(
        <div id="audio-library-options">
            <div 
            id="all-checkboxs">
                <Checkbox 
                setAllFileSelected={setAllFileSelected}
                allFileSelected={allFileSelected} />
            </div>
        </div>
    );
}

export default AudioLibraryOptions;
