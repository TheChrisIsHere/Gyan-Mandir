import React, { Component } from 'react'
import '../../App.css';
import './Carousel.css';
export class Carousel extends Component {
    render() {
        return (
            <div id="home">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2017/10/10/00/03/child-2835430_960_720.jpg" className="d-block h-100 w-100" alt="..." />
                        <div className="carousel-caption d-block">
                            <h2><span>Gyan Mandir</span> Higher Secondary School</h2>
                            <p>Experience excellence in education.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_960_720.jpg" className="d-block h-100 w-100" alt="..." />
                        <div className="carousel-caption d-block">
                            <h2><span>Gyan Mandir</span> Higher Secondary School</h2>
                            <p>Dedicated educators, exceptional results.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg" className="d-block h-100 w-100" alt="..." />
                        <div className="carousel-caption d-block">
                            <h2><span>Gyan Mandir</span> Higher Secondary School</h2>
                            <p>Inspiring students to achieve their best.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
        )
    }
}

export default Carousel
