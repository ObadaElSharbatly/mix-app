import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Nav(props) {
    return (
        <nav>
            <div>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div className='routes'>
                    <div>
                        <Link to='/'>Converter</Link>
                    </div>

                    <div>
                        <Link to='/rates'>Rates</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
