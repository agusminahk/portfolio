import React from 'react';
import { Person, Mail } from '@material-ui/icons';

import './navbar.scss';

const Navbar = ({ menu, setMenu }) => {
    return (
        <div className={'navbar ' + (menu && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">
                        agustin <span>{`/>`}</span>
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span> +54 9 351 769 6435 </span>

                        <Mail className="icon" />
                        <a href="#contact">
                            <span>agusminahk99@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenu(!menu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
