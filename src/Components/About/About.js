import React, { Component } from 'react'
import '../../App.css';
import './About.css';
import { Link } from 'react-router-dom';

const scrollIntoView = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="about mt-5">
                    <div className="container-fluid">
                        <h2 className="h2-responsive fw-bold text-center my-2">
                            About
                        </h2>
                        <p className="text-center w-responsive mx-auto">
                        Gyan Mandir is a premier educational institution, offering a wide range of academic programs and extracurricular activities to students from preschool to 12th grade. With a commitment to excellence and a dedication to the personal growth and development of each student, Gyan Mandir provides an exceptional learning environment that inspires students to achieve their full potential.
                        </p>


                        <div className="row pt-5">
                            <div className="col-6 align-items-stretch">
                                <img className="img-fluid" src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/309430467_505258824940345_4769457098212428331_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Uu5AAMWX-zgAX-8knBd&_nc_ht=scontent.fbho1-3.fna&oh=00_AfD_mqlNviyTnRO2EE6z8CvZ9NE3B_f5sa0M4jPumozbhA&oe=63BD0FEE" alt="School Picture"/>
                            </div>
                            <div className="col-md-6">
                                <h2 className="h2-responsive section-heading fw-bold text-start">Our School</h2>
                                <p className="lh-base">Gyan Mandir is a highly regarded institution, offering education from preschool all the way through to the 12th grade. Located in a convenient and easily accessible part of town, Gyan Mandir is a popular choice for students and parents alike. The school boasts state-of-the-art facilities and a dedicated team of educators, all working together to provide an exceptional learning experience for each and every student.</p>
                                <p className="lh-base">With a strong focus on academic excellence and personal development, Gyan Mandir provides a well-rounded education that prepares students for success in both their academic pursuits and in life. The school also offers a variety of extracurricular activities and programs, encouraging students to pursue their passions and interests outside of the classroom.</p>
                                <a onClick={()=>{scrollIntoView('contact')}} className="btn btn-primary px-2 pl-2 mt-3">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
