import "./styles.css";

import { useState } from "react";

const RenameAudio = (props) => {
    const {oldName, setFileName, setDisplayName} = props;

    const [newName, setNewName] = useState(oldName);

    const setNewFileName = (event) => {
        if (event.key === "Enter") {
            setFileName(newName);
            setDisplayName(newName);
        }
    }

    return (
        <div>
            <input 
            id="input-rename"
            type={"text"} 
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            onFocus={(event) => event.target.select()}
            onKeyDown={setNewFileName}
            autoFocus
            autoComplete="off"
            spellCheck="false"/>
        </div>
    );
}

export default RenameAudio;
