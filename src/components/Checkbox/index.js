import "./styles.css";

import { CheckIcon } from "../../Icons";

import { useRef, useEffect } from "react";

const Checkbox = (props) => {
    const {allFileSelected, setAllFileSelected, switchSelected, file} = props;

    const checkboxRef = useRef(null);

    const switchCheckboxStatus = () => {
        checkboxRef.current.classList.toggle("check-box-enabled");
        if (switchSelected) {
            switchSelected(!file?.selected);
        }
    }

    useEffect(() => {
        if (allFileSelected !== undefined && switchSelected) {
            if (allFileSelected) {
                checkboxRef.current.classList.add("check-box-enabled");
                switchSelected(true);
            } 
            else {
                checkboxRef.current.classList.remove("check-box-enabled");
                switchSelected(false);
            }
        }
    }, [allFileSelected]);

    return (
        <div 
        ref={checkboxRef}
        className={`check-box`}
        onClick={() => {
            switchCheckboxStatus();
            if (setAllFileSelected) {setAllFileSelected(!allFileSelected)};
        }}>
            <CheckIcon />
        </div>
    );
}

export default Checkbox;
