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
            visibleTooltip: null,
        }
    }

    setActive(id) {
        this.setState({ selectedTab: id });
    }

    createTooltip(data, i) {
        const opacity = this.state.visibleTooltip === i ? 1 : 0;
        return (
            <div className="tooltip" id={`tooltip-${i}`} style={{ opacity }}>
                <span style={{ textAlign: 'center' }}>{data.years}</span><br />
                <span>{data.description}</span><br />
                <span><strong>{data.skills}</strong></span>
            </div>
        )
    }

    toggleTooltip(e, index) {
        if (e) {
            const tooltip = document.getElementById(`tooltip-${index}`);
            const tooltipBounds = tooltip.getBoundingClientRect();
            const targetBounds = e.nativeEvent.toElement.getBoundingClientRect();
            tooltip.style.left = `${targetBounds.left - 50}px`;
            tooltip.style.top = `${targetBounds.top - tooltipBounds.height}px`;
        }
        this.setState({ visibleTooltip: index });
    }

    getReferenceData() {
        const dataSet = this.state.selectedTab === PROFESSIONAL ? referenceData.professional : referenceData.personal;
        return dataSet.map((d, i) => {
            return (
                <div className="three columns image-wrapper" style={{ textAlign: 'center' }} key={i}>
                    {this.createTooltip(d, i)}
                    <a href={d.url} target="_blank" className="reference" onMouseEnter={(e) => this.toggleTooltip(e, i)} onMouseLeave={() => this.toggleTooltip(null, null)}>
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