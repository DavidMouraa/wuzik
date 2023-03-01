import "./styles.css";

import AudioLibrary from "../../components/AudioLibrary";

const Home = (props) => {
    return (
        <div id="home">
            <AudioLibrary 
            audioList={props.audioList}
            getAudioFiles={props.getAudioFiles}/>
        </div>
    );
}

export default Home;
