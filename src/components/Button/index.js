import "./styles.css";
import "./keyframes.css";

import { useRef } from "react";

const Button = (props) => {
    const {classNames, clickEvents} = props

    const buttonRef = useRef(null);

    const switchButtonClickAnimation = () => {
        buttonRef.current.classList.toggle("click-animation");
    }

    const checkIfEventsExist = () => {
        if (clickEvents !== undefined) {
            clickEvents();
        }
    }

    return(
        <div 
        ref={buttonRef}
        className={`${classNames}`}
        onClick={(event) => {
            switchButtonClickAnimation();
            checkIfEventsExist();
        }}
        onAnimationEnd={switchButtonClickAnimation}>
            {props.children}
        </div>
    );
}

export default Button;
