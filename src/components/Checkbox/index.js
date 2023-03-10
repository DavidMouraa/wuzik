import "./styles.css";

import { CheckIcon } from "../../Icons";

import { useRef, useEffect } from "react";

const Checkbox = (props) => {
    const {file, audioList, setAudioList, whichCheckbox} = props;

    const checkboxRef = useRef(null);

    const switchAllCheckboxesStatus = () => {
        checkboxRef.current.classList.toggle("check-box-enabled");
        setAudioList(prevState => {
            const newList = [...prevState];

            for (let i = 0; i < newList.length; i++) {
                newList[i] = {...newList[i], selected: !newList[i].selected};
            }

            return newList;
        })
    }

    const switchThisCheckboxStatus = () => {
        const myIndex = audioList.indexOf(file);
        setAudioList(prevState => {
            const newList = [...prevState];

            newList[myIndex] = {...newList[myIndex], selected: !file.selected};

            return newList
        });
    }

    useEffect(() => {
        if(file)
        {
            if (file.selected) {
                checkboxRef.current.classList.add("check-box-enabled");
            }
            else {
                checkboxRef.current.classList.remove("check-box-enabled");
            }
        }
    }, [audioList, file]);

    return (
        <div 
        ref={checkboxRef}
        className={`check-box`}
        onClick={() => {
            if (whichCheckbox === "all") {
                switchAllCheckboxesStatus();
            } 
            else {
                switchThisCheckboxStatus();
            }
        }}>
            <CheckIcon />
        </div>
    );
}

export default Checkbox;
