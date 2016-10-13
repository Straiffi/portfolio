import React from 'react';
import ReactScroll, { Link, Element, Events } from 'react-scroll';
import ParallaxHeader from './components/ParallaxHeader/js/ParallaxHeader';
import SkillCloud from './components/SkillCloud/js/SkillCloud';
import ReferenceBox from './components/ReferenceBox/js/ReferenceBox';
import ContactMap from './components/ContactMap/js/ContactMap';
import './App.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.scroll = ReactScroll.animateScroll;
        this.scrollSpy = ReactScroll.scrollSpy;
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        this.scrollSpy.update();

    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="container">
                <nav className="row bordered center nav">
                    <Link to="references" spy={true} smooth={true} offset={-60} duration={500} className="three columns margin-none padding nav-link h5">
                        My work
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-60} duration={500} className="three columns margin-none padding nav-link h5">
                        About
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-60} duration={500} className="three columns margin-none padding nav-link h5">
                        Contact me
                    </Link>
                </nav>
                <div className="row">
                    <ParallaxHeader
                        text={'JUUSO SOIKKELI'}
                        subText={'ゆーそソイッケリ'}
                        backgroundColor={'rgba(176, 152, 196, 0.50)'}
                    />
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <p>
                            Software Developer specialized in <strong>Web</strong>, <strong>Mobile</strong> and <strong>Games</strong>.<br />
                            Enthusiastic about data visualization, maps and coffee.<br /><br />
                            Currently employed at <a href="http://symbio.com" target="_blank">Symbio.</a>
                        </p>
                    </div>
                </div>
                <div className="row center header margin-top--big">
                    <div className="twelve columns">
                        <Element name="references" />
                        <h2>My work</h2>
                    </div>
                </div>
                <div className="row">
                   <ReferenceBox />
                </div>
                <div className="row center header margin-top--big">
                    <div className="twelve columns">
                        <Element name="about" />
                        <h2>About</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="five columns bordered padding">
                        <h5 className="center">Fact sheet</h5>
                        <ul>
                            <li>
                                BBA, Specialized in Software Development
                            </li>
                            <li>
                                Born in '90
                            </li>
                            <li>
                                Headquartered in Helsinki, Finland
                            </li>
                        </ul>
                    </div>
                    <div className="seven columns">
                        <SkillCloud
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
                <div className="row center header margin-top--big">
                    <Element name="contact" />
                    <h2>Contact me</h2>
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
                    <div className="eight columns">
                        <ContactMap />
                    </div>
                </div>
                <footer className="row center bordered footer">
                    <div className="four columns">
                        <a href="mailto:jsoikkeli90@gmail.com" target="_blank">jsoikkeli90@gmail.com</a><br />
                    </div>
                    <div className="four columns">
                        <a href="https://github.com/Straiffi/portfolio" target="_blank">View page source</a>
                    </div>
                </footer>
            </div>
        );
    }
}