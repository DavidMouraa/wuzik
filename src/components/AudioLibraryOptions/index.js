import "./styles.css";

import { TrashCanIcon } from "../../Icons";

import Checkbox from "../Checkbox";
import Button from "../Button";

const AudioLibraryOptions = (props) => {
    const {audioList, setAudioList} = props;

    const removeSelectedAudio = () => {
        setAudioList(audioList.filter((item) => !item.selected));
    }

    return(
        <div id="audio-library-options">
            <div 
            id="all-checkboxes">
                <Checkbox 
                whichCheckbox={"all"}
                setAudioList={setAudioList} />
            </div>
            <div id="selected-options">
                <Button
                clickEvents={removeSelectedAudio}
                classNames={"remove-selected"}>
                    <TrashCanIcon/>
                </Button>
            </div>
        </div>
    );
}

export default AudioLibraryOptions;
