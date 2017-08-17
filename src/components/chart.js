/**
 * Created by Akshat on 17-08-2017.
 */
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


export default class Chart {
    constructor(props){
        super(props);
    }
    render(){
        return (

            <Sparklines data={this.props.data} height={100} width={150}>
                <SparklinesLine color={this.props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
        )
    }
}