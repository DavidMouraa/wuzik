import "./styles.css";

import { CheckIcon } from "../../Icons";

const Checkbox = (props) => {
    const {checkboxRef, switchFileSelectionStatus} = props;

    return (
        <div 
        ref={checkboxRef}
        onClick={switchFileSelectionStatus}
        className={`check-box`}>
            <CheckIcon />
        </div>
    );
}

export default Checkbox;
