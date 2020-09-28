import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = ''
if (process.env.LKG_LULU_MAP_KEY) {
  mapkey = process.env.LKG_LULU_MAP_KEY
}

console.log('Netlify Mapkey: ' + mapkey);

// https://www.google.com/maps/embed/v1/place?key=AIzaSyASzqnCrYBWXhFtdlXXBg_KCLxQTa1I5Y4&q=53.3285551%2C11.4964919&center=53.3296571817%2C11.4959101579&zoom=15&maptype=roadmap

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.3285006,
      lng: 11.4965447
    },
    zoom: 14
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={53.3285006} lng={11.4965447} text={'LKG Gemeinschaftshaus'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'red' }}>
      <MapPin />
    </div>
  )
}
