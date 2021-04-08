import React from "react";
import {
  Link
} from "react-router-dom";
export default function Navbar(){

    return (<div className ="navStyle">
            <nav>
                <ul>
                        <li>
                           <Link exact to='/login'><p>Login</p></Link>
                        </li>
                        <li>
                            <Link exact to='/'><p>Register</p></Link>
                        </li>
                </ul>
            </nav>
    </div>);
}