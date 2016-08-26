import React, { Component } from 'react';
import Button from './Button';
import { FirebaseDb } from './modules/firebase';
const ref = FirebaseDb.ref();

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      temporaryEditedText: {}
    }
  }

  enterEditableRowMode = () => {
    this.setState({editMode: true})
  }

  editName = (text, userProp) => {
    const newName = {
      ...this.state.temporaryEditedText,
      name: text.nativeEvent.srcElement.value
    }

    this.setState({temporaryEditedText: newName})
  }

  editLocation = (text, userProp) => {
    const newLocation = {
      ...this.state.temporaryEditedText,
      location: text.nativeEvent.srcElement.value
    }

    this.setState({temporaryEditedText: newLocation})
  }

  editAge = (text, userProp) => {
    const newAge = {
      ...this.state.temporaryEditedText,
      age: Number(text.nativeEvent.srcElement.value)
    }

    this.setState({temporaryEditedText: newAge})
  }

  saveEditedUserData = () => {
    const userRef = ref.child('UserData').child(this.props.userData.id);

    const { name, location, age } = this.state.temporaryEditedText;
    userRef.update({
      name: name,
      location: location,
      age: age
    }, (error) => {
      console.log(error);
    });

    this.setState({
      temporaryEditedText: {},
      editMode: false
    })
  }

  render() {

    /*
      Switches between edit-view and view-only with editMode state change.
    */

    console.log(this.state.temporaryEditedText)

    const editUserInputRow = (userProp, action) => {
      /*
        Pass down the defaultvalue from this.state.userData. Action from one of three edit actions to independentaly update state.
      */
      return (
        <td>
          <input
            className="table-input"
            type="text"
            defaultValue={userProp}
            onChange={(text) => action(text)}/>
        </td>
      )
    }

    if (this.state.editMode) {
      return (
        <tr>
          {editUserInputRow(this.props.userData.name, this.editName)}
          {editUserInputRow(this.props.userData.location, this.editLocation)}
          {editUserInputRow(this.props.userData.age, this.editAge)}
          <td style={{position: 'relative'}}>
            <Button
              label={'Cancel'}
              size={'small'}
              type={'outline'}
              action={() => this.setState({editMode: false})}
              />
            <div style={{position: 'absolute', top: 12, left: 100}}><Button
              label={'Save'}
              size={'small'}
              action={this.saveEditedUserData}
              /></div>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>{this.props.userData.name}</td>
          <td>{this.props.userData.location}</td>
          <td>{this.props.userData.age}</td>
          <td>
            <Button
              label={'Edit'}
              size={'small'}
              type={'outline'}
              action={this.enterEditableRowMode}
              />
          </td>
        </tr>
      )
    }
  }
}

export default UserRow;
