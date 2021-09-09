import React from "react";
import { Component } from "react";

import './H1.css'

class H1 extends Component {
    render() {
        return(
            <h1 className='title'>
                {this.props.title}
            </h1>
        )
    }
}

export default H1;