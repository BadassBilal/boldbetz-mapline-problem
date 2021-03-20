import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Polyline } from 'react-leaflet';
import axios from 'axios';

const polyline = [[51.2000, 0.12],[51.51, -0.12],];
const limeOptions = { color: 'lime' }


class App extends React.Component {
  
  componentDidMount() 
  {
    axios.get('https://pkgstore.datahub.io/examples/geojson-tutorial/example/data/db696b3bf628d9a273ca9907adcea5c9/example.geojson')
     .then((response) => {
       //console.log(response);
       this.setState({events: response.data})
     })
    .catch((error)=>{
       console.log(error);
    });

  }
  state = {
    events: null,
  }
  
  render() {
  return(
    <div id="mapid">
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {this.state.events && (<GeoJSON
    attribution='Britian'
    data={this.state.events}
    />)
  }

  <Polyline pathOptions={limeOptions} positions={polyline}/>
  </MapContainer>
  </div>
  );
}
}






//function App() {
//  return (
//    <h1>Hello Pack!!!</h1>
//  )
//}

export default App;
