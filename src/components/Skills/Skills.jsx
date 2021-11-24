import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

import './skills.scss';
import { skills } from '../../utils/data';

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="skills__content">
                <div className="skills__content__title">
                    <h2>
                        MY <span>SKILLS</span>
                    </h2>
                </div>
                <div className="skills__content__images">
                    <ul>
                        {skills.map((e, i) => (
                            <li>
                                <img src={e}></img>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href="#contact" className="skills__content__arrow">
                    <ArrowForwardIos className="skills__content__arrow__icon" />
                </a>
            </div>
        </div>
    );
}
