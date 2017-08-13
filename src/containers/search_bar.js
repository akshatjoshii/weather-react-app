/**
 * Created by Akshat on 13-08-2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            term: ''
        }
    }

    onInputChange = function (e) {
        console.log(e.target.value);

        this.setState({
            term:e.target.value
        })

    };

    render(){
        return (
            <form className="input-group" onChange={this.onInputChange}>
                <input className="form-control" value={this.state.term}/>
                <span className="input-button-btn">
                    <button className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}