import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SkillCloudGraph from './SkillCloudGraph';

export default class SkillCloud extends React.Component {
    componentDidMount() {
        const element = ReactDOM.findDOMNode(this);
        this.Graph = new SkillCloudGraph(element, {
            width: this.props.width,
            height: this.props.height,
        });
    }

    render() {
        return (
            <div className="graph--skill-cloud"></div>
        );
    }
}

SkillCloud.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};