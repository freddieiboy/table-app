import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import AutosizeInput from 'react-input-autosize'

/*
  Searchbox to create tags to filter the table.

  Tags are not stored in the SearchBox.js local state. They are pushed to
  App.js local state. Move state if a library like Redux is implemented.
  Users type their search terms and press enter to push their tags to
  App.js local state from `(tags) => this.props.addSearchTags(tags)`
*/

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  autosizingRenderInput = (props) => {
    /*
      Additional library for react-tagsinput.
    */
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

    /*
      Render Searchbox with `react-tagsinput`.

      A new renderInput is added from AutosizeInput library.
      TagsInput Docs: https://github.com/olahol/react-tagsinput
      Autosize Docs: https://github.com/JedWatson/react-input-autosize
    */

    return (
      <div className="SearchBox" style={styles.SearchBox}>
        <div className="searchContainer" style={styles.searchContainer}>
          <label style={styles.label}>Search</label>

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
