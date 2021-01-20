import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style= {{color:"red", fontSize:15}}>{text}</div>;
 
class GoogleMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            lat: 0,
            lng: 0
        }
    }
    
//   static defaultProps = {
//     center: {
//         lat: 0,
//         lng: 0
//     },
//     zoom: 11
//   };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAhYa7MrW55dyyK84zm_aXLUpGd5No2IR4' }}
          defaultCenter={this.state}
          defaultZoom= {15}
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text="Packpr"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;