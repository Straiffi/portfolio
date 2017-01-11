import React from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import ParallaxHeader from './components/ParallaxHeader/js/ParallaxHeader';
import SkillCloud from './components/SkillCloud/js/SkillCloud';
import ReferenceBox from './components/ReferenceBox/js/ReferenceBox';
import ContactMap from './components/ContactMap/js/ContactMap';
import './App.css';

export default class App extends React.Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
        });

        Events.scrollEvent.register('end', function(to, element) {
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="container">
                <nav className="row bordered center nav">
                    <Link to="references" spy={true} smooth={true} offset={-70} duration={500} className="three columns margin-none padding nav-link h5">
                        My work
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="three columns margin-none padding nav-link h5">
                        About
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="three columns margin-none padding nav-link h5">
                        Contact
                    </Link>
                </nav>
                <div className="row">
                    <ParallaxHeader
                        text={'JUUSO SOIKKELI'}
                        subText={'ゆーそソイッケリ'}
                        backgroundColor={'rgba(176, 152, 196, 0.50)'}
                    />
                </div>
                <section id="intro">
                    <div className="row">
                        <div className="twelve columns">
                            <p>
                                Software Engineer specialized in <strong>Web</strong>, <strong>Mobile</strong> and <strong>Games</strong>.<br />
                                Enthusiastic about data visualization, responsiveness and coffee.<br /><br />
                            </p>
                        </div>
                    </div>
                </section>
                <section id="references">
                    <div className="row center margin-top--big">
                        <div className="twelve columns">
                            <Element name="references" />
                            <h2 className="header">My work</h2>
                        </div>
                    </div>
                    <div className="row">
                       <ReferenceBox />
                    </div>
                </section>
                <section id="about">
                    <div className="row center margin-top--big">
                        <div className="twelve columns">
                            <Element name="about" />
                            <h2 className="header">About</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="five columns bordered padding" id="factsheet">
                            <h5 className="center">Fact sheet</h5>
                            <ul>
                                <li>
                                    Born in '90.
                                </li>
                                <li>
                                    IT-BBA, Specialized in Software Development.
                                    <ul>
                                        <li>
                                            Graduated in '14.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Headquartered in Helsinki, Finland.
                                </li>
                                <li>
                                    Has a cat.
                                </li>
                                <li>
                                    Currently employed at <a href="https://www.nitor.fi/en" target="_blank">Nitor.</a>
                                </li>
                            </ul>
                            <h5 className="center">Awards</h5>
                            <ul>
                                <li>
                                    Winner of <a href="https://www.guildwars2.com/en/news/the-results-of-the-overwolf-guild-wars-2-app-challenge-are-in/" target="_blank">GW2 App Challenge.</a>
                                </li>
                                <li>
                                    Symbio Newcomer the of Year 2015.
                                </li>
                            </ul>
                        </div>
                        <div className="seven columns">
                            <SkillCloud
                                height={450}
                                width={450}
                            />
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="row center margin-top--big">
                        <Element name="contact" />
                        <h2 className="header">Contact</h2>
                    </div>
                    <div className="row">
                        <div className="five columns bordered padding">
                            <h5 className="center">Juuso Soikkeli</h5>
                            <ul>
                                <li>
                                    <a href="mailto:jsoikkeli90@gmail.com" target="_blank">jsoikkeli90@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/juuso-soikkeli-a6a18790" target="_blank">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Straiffi/" target="_blank">GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div className="seven columns">
                            <ContactMap />
                        </div>
                    </div>
                </section>
                <footer className="row center bordered footer">
                    <div className="four columns">
                        <a href="mailto:jsoikkeli90@gmail.com" target="_blank">Mail me</a><br />
                    </div>
                    <div className="four columns">
                        <a href="https://github.com/Straiffi/portfolio" target="_blank">View page source</a>
                    </div>
                </footer>
            </div>
        );
    }
}