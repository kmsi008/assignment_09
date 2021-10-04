import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./About.css"

const About = () => {
    return (
        <div>
            <MenuBar />
            <div className='about'>
                <h1>"About" This Page Is Under Maintenance</h1>
            </div>

            <Footer />
        </div>
    );
};

export default About;