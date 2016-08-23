import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <label for="nameField">Search</label>
        <input type="text" placeholder="CJ Patoilo" id="nameField"/>
      </div>
    )
  }
}

export default SearchBox;
