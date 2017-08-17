/**
 * Created by Akshat on 13-08-2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchWeather from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            term: ''
        }
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
    }

    onInputChange = function (e) {

        this.setState({
            term:e.target.value
        })

    };



    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" onChange={this.onInputChange}>
                <input className="form-control"
                       placeholder="Get 5 days weather forecast of your favourite city"
                       value={this.state.term}/>
                <span className="input-button-btn">
                    <button className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return  bindActionCreators({
        fetchWeather: fetchWeather
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)