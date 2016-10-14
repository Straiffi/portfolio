import * as d3 from 'd3';
import _ from 'underscore';
import { skillData } from '../data/skillData';

export default class SkillCloudGraph {
    constructor(element, config) {
        this.element = element;
        this.config = config;
        this._getScreenDimensions();
        this._setEventListeners();

        const container = d3.select(this.element).append('svg')
            .attr('width', this.w)
            .attr('height', this.h)
            .attr('class', 'skill-cloud-graph')
            .append('g')
            .attr('class', 'skill-cloud-graph-container');

        container.append('g').attr('class', 'graph-frame');

        this.update();
    }

    _getScreenDimensions() {
        const leftColumnWidth = document.getElementById('factsheet').offsetWidth;
        const documentWidth = document.documentElement.clientWidth;
        const widthAddition = (documentWidth - leftColumnWidth) < 100 ? 210 : 0;

        const w = Math.max(documentWidth, window.innerWidth || 0) - 210;
        this.w = w < this.config.width ? (w + widthAddition) : this.config.width;
        this.h = this.w;
    }

    update() {
        this._getScreenDimensions();
        d3.select('.skill-cloud-graph')
            .attr('width', this.w)
            .attr('height', this.h);
        this._draw(this.element);
    }

    _draw(element) {
        const frame = d3.select(element).select('.graph-frame');
        frame.selectAll('*').remove();

        const diameter = this.w;

        const bubble = d3.pack(skillData)
            .size([diameter, diameter])
            .padding(1.5);

        const svg = frame.append('svg')
            .attr('width', diameter)
            .attr('height', diameter)
            .attr('class', 'bubble');

        var nodes = d3.hierarchy(skillData)
            .sum((d) => (d.size));

        const node = svg.selectAll('.node')
            .data(bubble(nodes).descendants())
            .enter()
            .filter((d) => (!d.children))
            .append('g')
            .attr('class', 'node')
            .attr('transform', (d) => (
                `translate(${d.x},${d.y})`
            ));

        node.on('mouseover', function(){
           d3.select(this).select('circle')
               .style('stroke', 'black')
               .style('stroke-dasharray', '3,4');
        }).on('mouseout', function() {
            d3.select(this).select('circle').style('stroke', 'none');
        });

        node.append('title')
            .text((d) => (d.name));

        node.append('circle')
            .attr('r', (d) => (d.r))
            .style('fill', (d) => (d.parent.data.color));

        node.append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .text((d) => (d.data.name.substring(0, d.r / 3)));
    }

    _handleResize() {
        return _.debounce(() => {
            this.update();
        }, 300).bind(this);
    }

    _setEventListeners() {
        window.addEventListener('resize', this._handleResize());
    }
}