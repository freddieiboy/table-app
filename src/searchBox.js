import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import Autosuggest from 'react-autosuggest'
import AutosizeInput from 'react-input-autosize'
import $ from 'jquery';


class SearchBox extends Component {
  constructor() {
    super()
      this.state = {
        tags: []
      }
    }

  handleChange(tags) {
    this.setState({tags})
    // setTimeout(() => {
    //   this.highlightEntries();
    // }, 1);
  }

  // highlightEntries = () => {
  //   this.state.tags.map((tag) => {
  //     if (tag === $('.UsersDataTable td').text()) {
  //       console.log('found')
  //     } else {
  //       console.log('nah')
  //     }
  //   })
  // }

  autosuggestRenderInput = (props) => {
    const {addTag, ...other} = props

		const handleOnChange = (e, {newValue, method}) => {
       if (method === 'enter') {
         e.preventDefault()
       } else {
         props.onChange(e)
       }
     }

			const inputValue = (props.value && props.value.trim().toLowerCase()) || ""
			const inputLength = inputValue.length

     let {tags} = this.state
     let suggestions = states().filter((state) => {
				return state.name.toLowerCase().slice(0, inputLength) === inputValue
     })

    return (
      <Autosuggest
        ref={props.ref}
        suggestions={suggestions}
        shouldRenderSuggestions={(value) => value && value.trim().length > 0}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
        inputProps={props}
        onSuggestionSelected={(e, {suggestion}) => {
          this.refs.tagsinput.addTag(suggestion.name)
        }}
      />
    )
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
          {/* <input type="text" placeholder="Search items, comma separated" id="nameField" style={styles.input} /> */}
          <TagsInput
            inputProps={{placeholder: "Search items, enter separated"}}
            renderInput={this.autosizingRenderInput}
            value={this.state.tags}
            onChange={(tags) => this.handleChange(tags)} />
        </div>
      </div>
    )
  }
}

export default SearchBox;
