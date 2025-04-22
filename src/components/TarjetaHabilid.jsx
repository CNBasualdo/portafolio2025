import React from "react";
import "../styles/tarjetaHabilid.css";
import {
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoBootstrap,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoPython,
    BiLogoDjango,
    BiData,
    BiLogoVisualStudio,
    BiLogoGit,
    BiLogoDocker,
    BiLogoPostgresql,
} from "react-icons/bi";

function TarjetaHabilid() {
    return (
        <div className='container-fluid'>
            <div className='icons'>
                <h2>FrontEnd</h2>
                <div className='botonera'>
                    <div className='icon'>
                        <BiLogoHtml5 className="img" />
                        <h4>Html5</h4>
                    </div>

                    <div className='icon '>
                        <BiLogoCss3 className="img"/>
                        <h4>Css3</h4>
                    </div>

                    <div className='icon '>
                        <BiLogoBootstrap className="img"/>
                        <h4>Bootstrap</h4>
                    </div>

                    <div className='icon '>
                        <BiLogoJavascript className="img"/>
                        <h4>JavaScript</h4>
                    </div>

                    <div className='icon '>
                        <BiLogoReact className="img"/>
                        <h4>React</h4>
                    </div>
                </div>
            </div>

            <div className='icons'>
                <h2>Backend</h2>
                <div className='botonera'>
                    <div className='icon'>
                        <BiLogoPython className="img"/>
                        <h4>Python</h4>
                    </div>

                    <div className='icon'>
                        <BiLogoDjango className="img"/>
                        <h4>Django</h4>
                    </div>

                    <div className='icon'>
                        <BiData className="img"/>
                        <h4>Sql</h4>
                    </div>
                </div>
            </div>

            <div className='icons'>
                <h2>Herramientas</h2>
                <div className='botonera'>
                    <div className='icon'>
                        <BiLogoVisualStudio className="img"/>
                        <h4>Visual Estudio</h4>
                    </div>

                    <div className='icon'>
                        <BiLogoGit className="img"/>
                        <h4>Git</h4>
                    </div>

                    <div className='icon'>
                        <BiLogoPostgresql className="img"/>
                        <h4>Postgresql</h4>
                    </div>

                    <div className='icon'>
                        <BiLogoDocker className="img"/>
                        <h4>Docker</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaHabilid;
