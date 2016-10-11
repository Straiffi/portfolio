import React, { PropTypes } from 'react';
import '../css/ParallaxHeader.css';

const MAX_DISTANCE = 4;
const PARALLAX_DISTANCE_THRESHOLD = 9999999;

export default class ParallaxHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			left: null,
			top: null,
		}
	}

	componentDidMount() {
		this.elem = document.getElementsByClassName('parallax-text')[0];
		this.elemPos = this.elem.getBoundingClientRect();
		document.onmousemove = (e) => this.mouseMove(e);
	}

	mouseMove(e) {
		const x = e.clientX;
		const y = e.clientY;
		const distanceX = (this.elemPos.left + this.elemPos.width / 2) - x;
		const distanceY = (this.elemPos.top + this.elemPos.height / 2) - y;
		if (Math.abs(distanceX) > PARALLAX_DISTANCE_THRESHOLD || Math.abs(distanceY) > PARALLAX_DISTANCE_THRESHOLD) { return; }

		const direction = { x: distanceX < 0 ? 'left' : 'right', y: distanceY < 0 ? 'up' : 'down' };
		
		let left = 0;
		let top = 0;
		if (direction.x === 'left') {
			left = distanceX > -MAX_DISTANCE ? distanceX : -MAX_DISTANCE;
		} else {
			left = distanceX < MAX_DISTANCE ? distanceX : MAX_DISTANCE;
		}

		if (direction.y === 'up') {
			top = distanceY > -MAX_DISTANCE ? distanceY : -MAX_DISTANCE;
		} else {
			top = distanceY < MAX_DISTANCE ? distanceY : MAX_DISTANCE;
		}

		this.setState({ left, top });
	}

	render() {
        return (
			<div className="parallax-header">
                <h1 className="parallax-bg" style={{ color: this.props.backgroundColor }}>{this.props.text}</h1>
				<h1 className="parallax-text outline-text" style={{ 'transform': `translate(${this.state.left}px,${this.state.top}px)`}}>{this.props.text}</h1>
                <h5 className="parallax-subtext-bg" style={{ color: this.props.backgroundColor }}>{this.props.subText}</h5>
				<h5 className="parallax-subtext" style={{ 'transform': `translate(${this.state.left}px,${this.state.top}px)`}}>{this.props.subText}</h5>
			</div>
		);
	}
}

ParallaxHeader.propTypes = {
	text: PropTypes.string,
	subText: PropTypes.string,
	backgroundColor: PropTypes.string,};