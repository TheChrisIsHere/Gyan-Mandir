import React, { Component } from 'react'
import './Header.css';
import { a } from 'react-router-dom';

const scrollIntoView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}


export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold" href="#" onClick={()=>{scrollIntoView('home')}}>Gyan Mandir</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                            <a href="#" className="nav-a active" aria-current="page" onClick={()=>{scrollIntoView('home')}}>Home</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a href="#" className="nav-a" onClick={()=>{scrollIntoView('about')}}>About</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a href="#" className="nav-a" onClick={()=>{scrollIntoView('courses')}}>Courses</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a href="#" className="nav-a" onClick={()=>{scrollIntoView('gallery')}}>Gallery</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a href="#" className="nav-a" onClick={()=>{scrollIntoView('contact')}}>Contact Us</a>
                            </li>
                            
                        </ul>
                        
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Header
