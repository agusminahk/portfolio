import React, { useState } from 'react';

import './app.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import Cover from './components/Cover/Cover.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Skills from './components/Skills/Skills.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import Menu from './components/Menu/Menu.jsx';

function App() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className="app">
            <Navbar menu={menuIsOpen} setMenu={setMenuIsOpen} />
            <Menu menu={menuIsOpen} setMenu={setMenuIsOpen} />

            <div className="sections">
                <Cover />
                <AboutMe />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}

export default App;
