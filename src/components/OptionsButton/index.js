import "./styles.css";

import { useEffect, useRef } from "react";

import { OptionsIcon } from "../../Icons";

const OptionsButton = (props) => {
    const optionsButtonRef = useRef(null);
    const optionsMenuRef = useRef(null);

    const switchOptionsClickAnimation = () => {
        optionsButtonRef.current.classList.toggle("click-animation");
    }

    const switchMenuOptionsState = (event) => {
        event.preventDefault();

        const clickedOnMe = optionsButtonRef.current.contains(event.target);

        if (clickedOnMe) {
            optionsMenuRef.current.classList.toggle("menu-fechado");
            optionsMenuRef.current.classList.toggle("menu-aberto");

            if (optionsMenuRef.current.getBoundingClientRect().y < -10) {
                optionsMenuRef.current.setAttribute("style", "top: 100%; bottom: auto;");
            }
        }
        else {
            optionsMenuRef.current.classList.remove("menu-aberto");
            optionsMenuRef.current.classList.add("menu-fechado");
        }
    }

    useEffect(() => {
        const handleClick = (event) => {
            if (optionsMenuRef.current) {
                switchMenuOptionsState(event);
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div 
        ref={optionsButtonRef}
        className="options-button"
        onClick={switchOptionsClickAnimation}
        onAnimationEnd={switchOptionsClickAnimation}>
            <OptionsIcon />
            <ul 
            ref={optionsMenuRef} 
            className="options-menu menu-fechado">
                {props.children}
            </ul>
        </div>
    );
}

export default OptionsButton;
