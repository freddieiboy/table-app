import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
// import 'react-tagsinput/react-tagsinput.css'
// import Autosuggest from 'react-autosuggest'
import AutosizeInput from 'react-input-autosize'
// import $ from 'jquery';


class SearchBox extends Component {
  constructor() {
    super()
      this.state = {
        tags: []
      }
    }

  handleChange(tags) {
    this.props.addSearchTerm(tags);
    // this.setState({tags})
  }

  autosizingRenderInput = (props) => {
    let {onChange, value, ...other} = props
    return (
      <AutosizeInput type='text' onChange={onChange} value={value} {...other} />
    )
  }

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
        fontSize: '.9em'
      },
      label: {
        marginTop: '.4em',
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
          {/* <input type="text" placeholder="Search items, comma separated" id="nameField" style={styles.input} /> */}
          <TagsInput
            inputProps={{
              placeholder: "Search items, enter separated"
            }}
            renderInput={this.autosizingRenderInput}
            value={this.props.tags}
            onChange={(tags) => this.props.addSearchTags(tags)} />
        </div>
      </div>
    )
  }
}

export default SearchBox;
