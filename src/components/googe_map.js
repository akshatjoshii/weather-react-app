/**
 * Created by Akshat on 17-08-2017.
 */
import React, {Component} from 'react';

export default class GoogleMap extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        return <div ref="map"></div>
    }
}