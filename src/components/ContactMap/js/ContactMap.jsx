import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class ContactMap extends React.Component {
    componentDidMount() {
        this.initMap();
    }

    initMap() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyYWlmZmkiLCJhIjoiYzVlOWY2ODhkODI3NDY4YmQ4YzdhYjRhODllY2Q0NGEifQ.CR969a_zkjvvTNmeu_0ZMg';
        if (mapboxgl.supported()) {
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/straiffi/ciu9bbk0z00072is1pbu2gu1y',
                center: [24.93837899999994, 60.16985569999999],
                zoom: 2
            });
            new mapboxgl.Popup({
                closeOnClick: false,
                closeButton: false
            })
                .setLngLat([24.93837899999994, 60.16985569999999])
                .setHTML("<span>I'm usually somewhere around here.</span>")
                .addTo(this.map);
        }
    }

    render() {
      return (
          <div id="map" className="map-container">
          </div>
      );
    }
}