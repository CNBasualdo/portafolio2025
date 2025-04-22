import React from "react";
import "../styles/sobreMi.css";
import icono1 from "../images/icono1.png";

function SobreMi() {
    return (
        <div className='sobremi'>
            <div className='contenido'>
                <h1>Conoceme</h1>
                <div className='objetos'>
                    <p className='descripcion'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ut quisquam possimus rem exercitationem, doloribus
                        accusamus fugit ullam beatae ex incidunt et sed iusto
                        eos accusantium velit, aliquid ipsam qui cupiditate.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. In fuga reiciendis inventore illum cumque itaque
                        ab debitis tenetur voluptates hic, harum eos neque minus
                        excepturi earum culpa explicabo, aliquid consequatur.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis quos, iusto quisquam consequuntur a
                        fugit atque obcaecati. Dolorum distinctio quaerat quas
                        molestiae, expedita ad soluta fugiat optio earum
                        ducimus? Fugiat.
                    </p>
                    <img src={icono1} className='icono' alt='' />
                </div>
            </div>
        </div>
    );
}

export default SobreMi;
