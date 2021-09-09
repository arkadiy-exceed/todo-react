import React from 'react';
import { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Sam'
        }
        this.changeName = this.changeName.bind(this)
        
    }
    changeName(value) {
        this.setState({
            title: value
        })
    }
  render() {

    return (
      <div>
          <Child title={this.state.title} changeName={(name) => this.changeName(name)} />
      </div>
    );
  }
  
}

export default Parent;