import React from 'react';

import production_video from '../assets/production_video.mp4';
import './Cover.css';

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={production_video} autoPlay loop muted />
        </div>
    );
};

export default Cover;
