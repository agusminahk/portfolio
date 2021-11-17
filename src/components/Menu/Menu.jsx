import React from 'react';

import './menu.scss';

const Menu = ({ menu, setMenu }) => {
    const categorys = ['Home', 'About Me', 'Projects', 'Skills', 'Contact'];

    return (
        <div className={'menu ' + (menu && 'active')}>
            <ul>
                {categorys.map((category) => {
                    const [first] = category.split(' ');
                    return (
                        <li onClick={() => setMenu(!menu)}>
                            <a href={`#${first.toLowerCase()}`}>{category}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menu;
