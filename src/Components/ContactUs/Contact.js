import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
                <div className="container">
                    <h2 className="h2-responsive fw-bold text-center my-2">
                        Contact Us
                    </h2>
                    <p className="text-center w-responsive mx-auto">
                        You can Contact Us On- <br/>
                        Phone No.: TBA<br/>
                        E-Mail: TBA<br/>
                        Address: Kampoo, Lashkar, Gwalior <br/>
                        Facebook: <a href="http://facebook.com/profile.php?id=100063686962886">Gyan Mandir</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact
