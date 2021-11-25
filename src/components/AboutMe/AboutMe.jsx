import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

import './aboutMe.scss';
import dev from '../../assets/about/dev.svg';
import perfil from '../../assets/about/perfil.jpg';

const AboutMe = () => {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="background"> </div>
                <div className="content">
                    <img src={perfil} alt="Agustin Minahk" />
                    <a href="#" className="pdf">
                        Download Resume
                    </a>
                </div>
                <a href="#projects" className="arrow">
                    <ArrowForwardIos className="icon" />
                </a>
            </div>
            <div className="right">
                <div className="background"></div>
                <div className="content">
                    <div className="title">
                        <h2>
                            About <span>me</span>
                        </h2>
                        <h3>Who am I?</h3>
                    </div>
                    <div className="text">
                        <strong>
                            I'm Agustin Minahk, a web developer with excellent technical and soft skills.
                        </strong>

                        <p>I love collaborating and working as a team. </p>
                        <p> I'm looking for a full time position in web development,</p>
                        <p> where I can apply my knowledge and skills to continue improving.</p>
                        <strong> I am pursuing a bachelor's degree in software engineering.</strong>
                    </div>
                    <div className="img">
                        <img src={dev} alt="developer" />
                        <p>
                            I am currently taking Plataforma5 Bootcamp, where i boost my knowledge day after
                            day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
