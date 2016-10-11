import React from 'react';
import ParallaxHeader from './components/ParallaxHeader/js/ParallaxHeader';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ParallaxHeader
          text={'JUUSO SOIKKELI'}
          subText={'ゆーそソイッケリ'}
          backgroundColor={'#720586'}
        />
        <div className="row center">
            <div className="two columns">Web</div>
            <div className="two columns">Mobile</div>
            <div className="two columns">Games</div>
        </div>
      </div>
    );
  }
}