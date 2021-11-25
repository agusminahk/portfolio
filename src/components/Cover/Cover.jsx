import React, { useEffect, useRef } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import { init } from 'ityped';

import production_video from '../../assets/wallpapers/production_video.mp4';
import './cover.scss';

const Cover = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 70,
            strings: ['React.js', 'Node.js', 'MERN', 'Full Stack Web'],
        });
    }, []);

    return (
        <div className="cover-container" id="home">
            <video className="video" src={production_video} autoPlay loop muted />
            <span />

            <h1>
                Agustin Minahk
                <p>
                    <span ref={textRef}></span> Developer
                </p>
            </h1>
            <a href="#about">
                <ArrowForwardIos className="icon" />
            </a>
        </div>
    );
};

export default Cover;
