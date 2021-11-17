import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

import './Card.scss';

const Card = ({ item }) => {
    return (
        <div className="container">
            <div className="card">
                <figure className="card__thumb">
                    <img src={item.img} alt={item.title} className="card__image" />
                    <figcaption className="card__caption">
                        <h2 className="card__title">{item.title}</h2>
                        <p className="card__snippet">{item.desc}</p>
                        <div className="card__button">
                            <a href="">
                                <BiWorld className="card__button__icon" /> Website
                            </a>
                            <a href="">
                                <BsGithub className="card__button__icon" /> Repository
                            </a>
                        </div>
                        <div className="card__tags">
                            {item.stack.map((tag) => (
                                <h4>{tag}</h4>
                            ))}
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Card;
