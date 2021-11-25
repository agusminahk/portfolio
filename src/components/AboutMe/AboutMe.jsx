import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

import './aboutMe.scss';
import dev from '../../assets/about/dev.svg';
import perfil from '../../assets/about/perfil.jpg';
import resume from '../../assets/about/resume.pdf';

const AboutMe = () => {
    return (
        <div className="about" id="about">
            <div className="about__left">
                <div className="about__left__background"> </div>
                <div className="about__left__content">
                    <img src={perfil} alt="Agustin Minahk" />
                    <a
                        href={resume}
                        type="application/pdf"
                        target="_blank"
                        className="about__left__content__link"
                    >
                        SEE MY RESUME
                    </a>
                </div>
                <a href="#projects" className="about__left__arrow">
                    <ArrowForwardIos className="about__left__arrow__icon" />
                </a>
            </div>
            <div className="about__right">
                <div className="background"></div>

                <div className="about__right__title">
                    <h2>
                        About <span>me</span>
                    </h2>
                    <h3>Who am I?</h3>
                </div>
                <div className="about__right__text">
                    <strong>
                        I'm Agustin Minahk, a web developer with excellent technical and soft skills.
                    </strong>

                    <p>I love collaborating and working as a team. </p>
                    <p> I'm looking for a full time position in web development,</p>
                    <p> where I can apply my knowledge and skills to continue improving.</p>
                    <strong> I am pursuing a bachelor's degree in software engineering.</strong>
                </div>
                <div className="about__right__img">
                    <img src={dev} alt="developer" />
                    <p>
                        I am currently taking Plataforma5 Bootcamp, where i boost my knowledge day after day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
