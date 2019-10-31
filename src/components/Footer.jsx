import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto">
                <div className="container">
                    <span className="text">Basic ReactJS Template &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
