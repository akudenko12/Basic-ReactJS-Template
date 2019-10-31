import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Global.css';

class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <Navbar />
                <Jumbotron title="Homepage" subtitle="Subtitle for Home page" />
                <div className="container">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>

                    <h2>Hedonist Roots</h2>

                    <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin,
                        though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader,
                        “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a
                        glance it looks pretty real.”</p>
                    <p>As Cicero would put it, “Um, not so fast.”</p>
                    <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>
                    <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the
                        source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued
                        by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a
                        passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C.
                        text from the Roman philosopher Cicero.</p>
                    <p>In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections
                        1.10.32–33 of Cicero's work, with the most notable passage excerpted below:</p>
                    <p>“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
                        A 1914 English translation by Harris Rackham reads:</p>
                    <p>“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”
                        McClintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin, however,
                        the “how and when” still remain something of a mystery, with competing theories and timelines.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;