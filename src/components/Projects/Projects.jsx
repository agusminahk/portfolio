import React from 'react';

import 'animate.css';

import './projects.scss';
import { data } from '../../utils/data';
import Card from '../../common/Card';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="title2">
                <h2>
                    MY <span>PROJECTS</span>
                </h2>
            </div>
            <div className="container animate__animated animate__fadeInUp">
                {data.map((e) => (
                    <Card item={e} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
