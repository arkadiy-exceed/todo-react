import React from 'react';
import { Component } from 'react';


class Child extends Component {
  render() {
    return (
      <div onClick={() => this.props.changeName('John')}>
          Hello {this.props.title}
      </div>
    );
  }
  
}

export default Child;