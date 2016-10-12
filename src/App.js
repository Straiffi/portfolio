import React from 'react';
import ParallaxHeader from './components/ParallaxHeader/js/ParallaxHeader';
import SkillCloud from './components/SkillCloud/js/SkillCloud';
import ReferenceBox from './components/ReferenceBox/js/ReferenceBox';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="row bordered center nav">
                    <h5 className="three columns margin-none padding">My work</h5>
                    <h5 className="three columns margin-none padding">Contact me</h5>
                    <h5 className="three columns margin-none padding">Something</h5>
                </nav>
                <div className="row">
                    <ParallaxHeader
                        text={'JUUSO SOIKKELI'}
                        subText={'ゆーそソイッケリ'}
                        backgroundColor={'#720586'}
                    />
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <p>
                            Software Developer specialized in <strong>Web</strong>, <strong>Mobile</strong> and <strong>Games</strong>.<br />
                            I enjoy data visualization, maps and coffee.<br /><br />
                            Currently employed at <a href="http://symbio.com" target="_blank">Symbio.</a>
                        </p>
                    </div>
                </div>
                <div className="row center header">
                    <div className="twelve columns">
                        <h2>My work</h2>
                    </div>
                </div>
                <div className="row">
                   <ReferenceBox />
                </div>
                {/*<div className="row center bordered">*/}
                    {/*<div className="two columns">Web</div>*/}
                    {/*<div className="one column">//</div>*/}
                    {/*<div className="two columns">Mobile</div>*/}
                    {/*<div className="one column">//</div>*/}
                    {/*<div className="two columns">Games</div>*/}
                {/*</div>*/}
                <div className="row center margin-top">
                    <h3>Skill Cloud</h3>
                </div>
                <div className="row center">
                    <div className="twelve columns">
                        <SkillCloud
                            height={600}
                            width={600}
                        />
                    </div>
                </div>
            </div>
        );
    }
}