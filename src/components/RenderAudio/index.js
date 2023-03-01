import "./styles.css";

const RenderAudio = (props) => {
    const {name} = props.audio;

    return (
        <div 
        id="box-audio"
        onClick={() => {}}>
            <span>{name}</span>
            <span>0:00</span>
        </div>
    );
}

export default RenderAudio;
