import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Global.css';

class About extends Component {
    render() {
        return (
            <div className="aboutpage">
                <Navbar />
                <Jumbotron title="About Page" subtitle="Subtitle for About Page" />
                <div className="container">
                    <h2>History, Purpose and Usage</h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's
                    De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>

                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.”</p>

                    <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't
                    distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very
                    useful when the focus is meant to be on design, not content.</p>

                    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets,
                    and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web;
                    on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative
                    history of lorem ipsum.</p>

                </div>
                <Footer />
            </div>
        );
    }
}

export default About;