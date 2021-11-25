import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

import './card.scss';

const Card = ({ item }) => {
    const { img, title, desc, stack, repo, url } = item;
    return (
        <div className="container">
            <div className="card">
                <figure className="card__thumb">
                    <img src={img} alt={title} className={'card__image'} />
                    <figcaption className="card__caption">
                        <h2 className="card__title">{title}</h2>
                        <p className="card__snippet">{desc}</p>
                        <div className="card__button">
                            <a href={url} target="_blank">
                                <BiWorld className="card__button__icon" /> Website
                            </a>
                            <a href={repo} target="_blank">
                                <BsGithub className="card__button__icon" /> Repository
                            </a>
                        </div>
                        <div className="card__tags">
                            {stack.map((tag, idx) => (
                                <h4 key={idx}>{tag}</h4>
                            ))}
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Card;
