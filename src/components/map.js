import React, { Component } from 'react';
import '../App.css';
import {Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class Mapa extends Component {
  constructor(props) {
    super()
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 13
    }
    this.changePosition = this.changePosition.bind(this);
    this.showPosition = this.showPosition.bind(this);
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }


    showPosition(positionCallBack){
        this.setState({
            lat: positionCallBack.coords.latitude,
            lng: positionCallBack.coords.longitude,
            zoom: 13
        });   
    } 

    
  
   changePosition(e){   
    this.setState({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        zoom: this.map.leafletElement.getZoom()
    });  
   }

  render() {
    const position = [this.state.lat, this.state.lng];
    return(
        <LeafletMap ref={(ref) => this.map = ref} onclick={this.changePosition} style={{ height: "400px", width: "100hv" }} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
          <div>
              <p> ¿Desea poner el marcador en esta dirección? <br/> Presione en el botón para contactar al taxista mas cercano</p>
              <button>Click Me!</button>
            </div>    
          </Popup>
        </Marker>
      </LeafletMap>);
  }
}


export default Mapa;