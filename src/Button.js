import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  setAction = () => {
    this.props.action();
  }

  render() {
    return (
      <div className="Button button-black" onMouseUp={this.setAction}>
        <div className="button-label">{this.props.label}</div>
      </div>
    )
  }
}
