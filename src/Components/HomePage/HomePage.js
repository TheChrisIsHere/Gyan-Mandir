import React, { Component } from 'react'
import Carousel from './Carousel.js';
import About from '../About/About.js';
import Courses from '../Courses/Courses.js';
import Contact from '../ContactUs/Contact.js';
import Gallery from '../Gallery/Gallery.js';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <About />
                <Courses />
                <Contact />
                <Gallery />
            </div>
        )
    }
}

export default HomePage
