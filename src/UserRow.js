import React, { Component } from 'react';
import Button from './Button';
import { FirebaseDb } from './modules/firebase';
const ref = FirebaseDb.ref();

/*
  UserRow. Single Table row.

  <UserRow userData={data}/>

  Holds the indiviual state of each row with the ability to push
  changes directly to Firebase when the user presses save.

  todo: clean up the row css to not move so much on edit mode. painful right now.
*/

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      temporaryEditedText: {}
    }
  }

  componentWillMount = () => {
    /*
      On WillMount, row creates a separate temporary copy of it's own
      userData prop for future use with pushing changes to Firebase.
    */
    this.setState({temporaryEditedText: this.props.userData})
  }

  enterEditableRowMode = () => {
    this.setState({editMode: true})
  }

  /*
    Edit Name, Location, Age.

    Each function handles it's own property. Pushing changes to
    this.state.temporaryEditedText from the text in the inputs on edit.
  */

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
    /*
      Push changes to firebase from this.state.temporaryEditedText.
    */
    const userRef = ref.child('UserData').child(this.props.userData.id);

    const { name, location, age } = this.state.temporaryEditedText;
    userRef.update({
      name: name,
      location: location,
      age: age
    }, (error) => {
      console.log(error);
    });

    /*
      Flush local state and leave edit mode.
    */

    this.setState({
      editMode: false
    });
  }

  render() {

    /*
      Render UserRow.

      Switches between edit-view and view-only with editMode state change.
    */

    const editUserInputRow = (userProp, action) => {
      /*
        Pass down the defaultvalue from this.state.userData. Action from one of three edit actions to independentaly update state.

        editUserInputRow(prop, function);
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
