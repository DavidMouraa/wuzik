import "./styles.css";

import { CrossIcon } from "../../Icons";

const DisplayProperty = (props) => {
    const { propertyVisibilite, setPropertyVisibilite, propertyFile } = props;

    return (
        <section id="property-display" className={propertyVisibilite}>
            <button 
            id="close-property-button"
            onClick={() => setPropertyVisibilite("property-invisible")}>
                <CrossIcon/>
            </button>

            <div id="propertys">
                <h2>Propriedades</h2>
                <div>
                    <div className="property">
                        <h3>Título</h3>
                        <span>{propertyFile?.name}</span>
                    </div>
                    <div className="property">
                        <h3>Duração</h3>
                        <span>{propertyFile?.duration}</span>
                    </div>
                    <div className="property">
                        <h3>Formato</h3>
                        <span>{propertyFile?.format}</span>
                    </div>
                    <div className="property">
                        <h3>Tamanho</h3>
                        <span>{propertyFile?.size}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DisplayProperty;
