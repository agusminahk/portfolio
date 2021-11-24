import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import 'animate.css';

import './projects.scss';
import { projects } from '../../utils/data';
import Card from '../../common/Card/Card';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="title">
                <h2>
                    MY <span>PROJECTS</span>
                </h2>
            </div>
            <div className="container animate__animated animate__fadeInUp">
                {projects.map((e) => (
                    <Card item={e} />
                ))}
            </div>
            <a href="#skills" className="arrow">
                <ArrowForwardIos className="icon" />
            </a>
        </div>
    );
};

export default Projects;
