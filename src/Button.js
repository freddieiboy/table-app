import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    }
  }

  setAction = () => {
    this.props.action();
    this.unPress();
  }

  press = () => {
    return this.setState({pressed: true});
  }

  unPress = () => {
    return this.setState({pressed: false});
  }

  render() {
    const styles = {
      Button: {
        backgroundColor: 'black',
        borderColor: 'black'
      },
      outline: {
        color: 'black',
        backgroundColor: 'white'
      },
      small: {
        fontSize: '.8rem',
        height: '2.8rem',
        lineHeight: '2.8rem',
        padding: '0 1.5rem'
      },
      pressed: {
        opacity: .6,
        backgroundColor: '#f1f1f1'
      }
    }
    return (
      <button
        className="button button-black"
        style={ifStyle(
          styles.Button,
          this.props.type === 'outline' && styles.outline,
          this.props.size === 'small' && styles.small,
          this.state.pressed && styles.pressed
        )}
        onMouseUp={this.setAction}
        onMouseDown={this.press}>
        {this.props.label}
      </button>
    )
  }
}

export function ifStyle() {
  var res = {};
  for (var i = 0; i < arguments.length; ++i) {
    if (arguments[i]) {
      Object.assign(res, arguments[i]);
    }
  }
  return res;
}

export default Button;
