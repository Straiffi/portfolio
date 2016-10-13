import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export default class ContactMap extends React.Component {
    componentDidMount() {
        this.initMap();
    }

    initMap() {
        mapboxgl.accessToken = '';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    }

    render() {
      return (
          <div id="map">
          </div>
      );
    }
}