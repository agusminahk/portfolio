import bixbax from '../assets/projects/bixbax.png';
import rynok from '../assets/projects/rynok.png';
import portfolio from '../assets/projects/portfolio.png';

import node from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import docker from '../assets/skills/docker.png';
import react from '../assets/skills/react.png';
import mongo from '../assets/skills/mongo.png';
import mongoose from '../assets/skills/mongoose.png';
import postgresql from '../assets/skills/postgresql.png';
import sequelize from '../assets/skills/sequelize.png';
import git from '../assets/skills/git.png';
import chakra from '../assets/skills/chakra.png';
import sass from '../assets/skills/sass.png';
import redux from '../assets/skills/redux.png';
import socket from '../assets/skills/socket.png';
import mocha from '../assets/skills/mocha.png';
import jasmine from '../assets/skills/jasmine.png';
import jwt from '../assets/skills/jwt.png';
import passport from '../assets/skills/passport.png';

export const skills = [
    react,
    redux,
    node,
    express,
    docker,
    mongo,
    mongoose,
    postgresql,
    sequelize,
    passport,
    jwt,
    chakra,
    socket,
    jasmine,
    mocha,
    sass,
    git,
];

export const projects = [
    {
        title: 'BIXBAX OMDB',
        desc: 'Performed in a MERN environment. This is an individual project. ',
        stack: ['MongoDB', 'Express', 'Nodejs', 'Reactjs', 'Redux', 'Passport', 'ChakraUI'],
        img: bixbax,
        url: 'https://bixbax.herokuapp.com/',
        repo: 'https://github.com/agusminahk/omdb',
    },
    {
        title: 'RYNOK E-COMMERCE',
        desc: 'Performed in a MERN environment. This is a team project. ',
        stack: ['MongoDB', 'Express', 'Nodejs', 'Reactjs', 'Redux', 'ChakraUI', 'Passport', 'JWT'],
        img: rynok,
        url: 'https://rynokcommerce.herokuapp.com/',
        repo: 'https://github.com/agusminahk/ecommerce',
    },
    {
        title: 'MY PORTFOLIO',
        desc: 'My first personal Portfolio using Sass and React.',
        stack: ['Reactjs', 'Sass'],
        img: portfolio,
        url: 'https://unsplash.com/',
        repo: 'https://github.com/agusminahk/portfolio',
    },
];
