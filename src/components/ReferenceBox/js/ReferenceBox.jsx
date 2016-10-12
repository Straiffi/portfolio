import React from 'react';
import { referenceData } from '../data/referenceData';
import '../css/ReferenceBox.css';

const PROFESSIONAL = 1;
const PERSONAL = 2;

export default class ReferenceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: PROFESSIONAL,
        }
    }

    setActive(id) {
        this.setState({ selectedTab: id });
    }

    getReferenceData() {
        let dataSet = {};
        switch(this.state.selectedTab) {
            case PROFESSIONAL:
                dataSet = referenceData.professional;
                break;

            case PERSONAL:
                dataSet = referenceData.personal;
                break;

            default:
                dataSet = referenceData.professional;
                break;
        }

        return dataSet.map((d, i) => {
            return (
                <div className="three columns image-wrapper" style={{ textAlign: 'center' }} key={i}>
                    <a href={d.url} target="_blank" className="reference">
                        <div style={{ height: 128, width: 256, background: `url(${d.image}) 50% 50% no-repeat` }} className="u-max-full-width reference-image"></div>
                        <h5 className="reference-name">{d.name}</h5>
                    </a>
                </div>
            )
        });
    }

    render() {
        const references = this.getReferenceData();
        return (
          <div>
            <div className="row">
                <div className={`three columns box-tab ${this.state.selectedTab === PROFESSIONAL ? 'selected' : ''}`} id="tab-1" onClick={() => this.setActive(1)}>
                    Professional
                </div>
                <div className={`three columns box-tab margin-left--small ${this.state.selectedTab === PERSONAL ? 'selected' : ''}`} id="tab-2" onClick={() => this.setActive(2)}>
                    Personal
                </div>
            </div>
          <div className="row bordered padding">
              {references}
          </div>
          </div>
        );
    }
}