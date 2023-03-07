import "./styles.css";

import AudioLibrary from "../../components/AudioLibrary";
import DisplayProperty from "../../components/DisplayProperty";

const Home = (props) => {
    return (
        <div id="home">
            <AudioLibrary 
            audioList={props.audioList}
            setAudioList={props.setAudioList}
            getAudioFiles={props.getAudioFiles} 
            propertyVisibilite={props.propertyVisibilite}
            setPropertyVisibilite={props.setPropertyVisibilite}
            setPropertyFile={props.setPropertyFile} />

            <DisplayProperty
            propertyVisibilite={props.propertyVisibilite}
            setPropertyVisibilite={props.setPropertyVisibilite}
            propertyFile={props.propertyFile} />
        </div>
    );
}

export default Home;
