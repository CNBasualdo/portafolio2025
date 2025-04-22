import React from "react";
import "../styles/paginaPrinc.css";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import TarjetaPrinc from "../components/TarjetaPrinc.jsx";
import TarjetaHabilid from "../components/TarjetaHabilid.jsx";
import SobreMi from "../components/SobreMi.jsx";

function PaginaPrincipal() {
    return (
        <div className='Principal'>
            <NavBar />
            <TarjetaPrinc/>
            <TarjetaHabilid/>
            <SobreMi/>
            <Footer />
        </div>
    );
}

export default PaginaPrincipal;
