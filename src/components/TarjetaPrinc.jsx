import "../styles/tarjetaprinc.css";
import imagen1 from "../images/ImgPrinc.jpeg";
import Textmovil from "./Textmovil";

function TarjetaPrinc() {
    const TextoTitulo = "Nicolas Basualdo ";
    const TextoSecundario = "Desarrollador Web";

    return (
        <div className='tarjetero'>
            <div className='card  '>
                <img src={imagen1} className='card-img-top' />
                <div className='card-body '>
                    <Textmovil
                        text={TextoTitulo}
                        mLeftInicial={30}
                        transitionTime={8}
                        tickCambioLetra={150}
                    />
                    <Textmovil
                        text={TextoSecundario}
                        mLeftInicial={30}
                        transitionTime={8}
                        tickCambioLetra={150}
                        
                    />
                </div>
            </div>
        </div>
    );
}

export default TarjetaPrinc;
