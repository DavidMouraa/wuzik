import "./styles.css";

import { TrashCanIcon } from "../../Icons";

import Checkbox from "../Checkbox";

const AudioLibraryOptions = (props) => {
    const {allFileSelected, setAllFileSelected} = props;

    return(
        <div id="audio-library-options">
            <div 
            id="all-checkboxs">
                <Checkbox 
                setAllFileSelected={setAllFileSelected}
                allFileSelected={allFileSelected} />
            </div>
            <div id="selected-options">
                <div>
                    <TrashCanIcon/>
                </div>
            </div>
        </div>
    );
}

export default AudioLibraryOptions;
