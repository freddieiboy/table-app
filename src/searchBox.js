import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    const styles = {
      SearchBox: {
        flex: 'auto',
        marginBottom: '1em',
        padding: '1em 3em',
        backgroundColor: 'white',
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.1)',
        maxWidth: '900px',
        minHeight: '95px',
        maxHeight: '95px',
        width: '100%'
      },
      input: {
        width: '100%',
        marginTop: '10px',
      },
      label: {
        marginTop: '1em',
        marginRight: '1em',
        opacity: .5,
      },
      searchContainer: {
        display: 'flex',
        alignItems: 'center',
      }
    }
    return (
      <div className="SearchBox" style={styles.SearchBox}>
        <div className="searchContainer" style={styles.searchContainer}>
          <label style={styles.label}>Search</label>
          <input type="text" placeholder="Search items, comma separated" id="nameField" style={styles.input}/>
        </div>
      </div>
    )
  }
}

export default SearchBox;
