import React from "react";
import "../styles/navbar.css"

export default function NavBar() {
    return (
        <>
            <ul className='nav nav-underline justify-content-center'>
                <li className='nav-item'>
                    <a className='nav-link ' aria-current='page' href='#'>
                        Contacto
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link ' href='#'>
                        Proyectos
                    </a>
                </li>
            </ul>
        </>
    );
}
