import React from 'react';
import ParallaxHeader from './components/ParallaxHeader/js/ParallaxHeader';
import SkillCloud from './components/SkillCloud/js/SkillCloud';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ParallaxHeader
                        text={'JUUSO SOIKKELI'}
                        subText={'ゆーそソイッケリ'}
                        backgroundColor={'#720586'}
                    />
                </div>
                <div className="row center bordered">
                    <div className="two columns">Web</div>
                    <div className="one column">//</div>
                    <div className="two columns">Mobile</div>
                    <div className="one column">//</div>
                    <div className="two columns">Games</div>
                </div>
                <div className="row center">
                    <h2>Skill Cloud</h2>
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