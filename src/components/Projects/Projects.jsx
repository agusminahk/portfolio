import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

import './projects.scss';
import { projects } from '../../utils/data';
import Card from '../../common/Card/Card';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects__title">
                <h2>
                    MY <span>PROJECTS</span>
                </h2>
            </div>
            <div className="projects__container">
                {projects.map((e, i) => (
                    <Card item={e} key={i} />
                ))}
            </div>
            <a href="#skills" className="projects__arrow">
                <ArrowForwardIos className="projects__arrow__icon" />
            </a>
        </div>
    );
};

export default Projects;
