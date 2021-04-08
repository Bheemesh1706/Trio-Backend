import React from "react";

export default function Navbar(){

    return (<div className ="navStyle">
            <nav>
                <ul>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                </ul>
            </nav>
    </div>);
}