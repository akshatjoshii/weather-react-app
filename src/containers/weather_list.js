/**
 * Created by Akshat on 15-08-2017.
 */

import React , { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/googe_map';

class WeatherList extends Component {
    constructor(props){
        super(props);
    }
    renderWeather(){
      return this.props.weather.map((cityData)=>{
          const temps = cityData.list.map((weather)=>{
              return weather.main.temp
          });
          const pressure = cityData.list.map(weather=>weather.main.pressure);
          const humidity = cityData.list.map(weather=>weather.main.humidity);
          const lon = cityData.city.coord.lon;
          const lat = cityData.city.coord.lat;

          return (
           <tr key={cityData.city.name}>
               <td ><GoogleMap lon={lon} lat={lat} /></td>
               <td>
                   <Chart data={temps} color={"blue"}/>
               </td>
               <td>
                   <Chart data={pressure} color={"red"}/>

               </td>
               <td>
                   <Chart data={humidity} color={"yellow"}/>
 
               </td>
          </tr>)
      })
    };
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderWeather()}
                </tbody>
            </table>
        )
    }
}

function bindStateToProps(state){
    return {
        weather: state.weather
    }
}

export default connect(bindStateToProps)(WeatherList);