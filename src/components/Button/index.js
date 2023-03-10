import "./styles.css";
import "./keyframes.css";

import { useRef } from "react";

const Button = (props) => {
    const {classNames, clickEvents} = props

    const buttonRef = useRef(null);

    const switchButtonClickAnimation = () => {
        buttonRef.current.classList.toggle("click-animation");
    }

    const checkIfEventsExist = (event) => {
        if (clickEvents !== undefined) {
            clickEvents(event);
        }
    }

    return(
        <div 
        ref={buttonRef}
        className={`button ${classNames}`}
        onClick={(event) => {
            switchButtonClickAnimation();
            checkIfEventsExist(event);
        }}
        onAnimationEnd={switchButtonClickAnimation}>
            {props.children}
        </div>
    );
}

export default Button;
