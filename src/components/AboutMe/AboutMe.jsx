import React from 'react';

import './aboutMe.scss';
import dev from '../../assets/dev.svg';
import perfil from '../../assets/perfil.jpg';

const AboutMe = () => {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="background"> </div>
                <div className="content">
                    <img src={perfil} />
                    <a href="#">Download Resume</a>
                </div>
            </div>
            <div className="right">
                <div className="background"></div>
                <div className="content">
                    <div className="title">
                        <h2>
                            About <span>me</span>
                        </h2>
                    </div>
                    <div className="text">
                        <h3>Who am I?</h3>
                        <strong>
                            I'm Agustin Minahk, a web developer with excellent technical and soft skills.
                        </strong>

                        <p>I love collaborating and working as a team. </p>
                        <p> I'm looking for a full time position in web development,</p>
                        <p> where I can apply my knowledge and skills to continue improving.</p>
                        <strong> I am pursuing a bachelor's degree in software engineering.</strong>

                        <img src={dev} />
                        <p>I am currently taking Plataforma5 Bootcamp,</p>
                        <p>where I boost my knowledge day after day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
