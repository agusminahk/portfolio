import React from 'react';

import { BsGoogle } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import './contact.scss';
import gmail from '../../assets/socials/gmail.png';
import ig from '../../assets/socials/ig.png';
import wpp from '../../assets/socials/wpp.png';
import github from '../../assets/socials/github.png';
import linkedin from '../../assets/socials/linkedin.png';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2 className="title">
                CONTACT<span> ME</span>
            </h2>
            <div className="social-buttons">
                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVWFPGDqfPPlRLgFpGLNTLNzmcsZmDBqGhpWcPNvgVcdplvhkslLGSfFJKlZzBDCXdFMP"
                    className="social-buttons__button  social-button"
                    aria-label="Gmail"
                    target="_blank"
                >
                    <img src={gmail} />
                    <span>Gmail</span>
                </a>
                <a
                    href="#"
                    className="social-buttons__button social-button"
                    aria-label="LinkedIn"
                    target="_blank"
                >
                    <img src={linkedin} />
                    <span>LinkedIn</span>
                </a>
                <a
                    href="#"
                    className="social-buttons__button social-button"
                    aria-label="GitHub"
                    target="_blank"
                >
                    <img src={github} />
                    <span>GitHub</span>
                </a>
                <a
                    href="#"
                    className="social-buttons__button social-button"
                    aria-label="WhatsApp"
                    target="_blank"
                >
                    <img src={wpp} />
                    <span>WhatsApp</span>
                </a>
                <a
                    href="#"
                    className="social-buttons__button social-button "
                    aria-label="Instagram"
                    target="_blank"
                >
                    <img src={ig} />
                    <span>Instagram</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
