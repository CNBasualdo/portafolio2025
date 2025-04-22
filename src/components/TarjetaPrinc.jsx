import React from "react";
import "../styles/tarjetaprinc.css";
import imagen1 from "../images/ImgPrinc.jpeg";











function TarjetaPrinc() {
    return (
        <div className="tarjetero">
            <div className='card  '>
                <img src={imagen1} className='card-img-top' />
                <div className='card-body '>
                    <h2 className='card-title '>Carlos Nicolas Basualdo</h2>
                    <p className='card-text'>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                    <p className='card-text'>
                        <small className='text-body-secondary'>
                            Last updated 3 mins ago
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TarjetaPrinc;
