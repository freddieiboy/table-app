import React, { Component } from 'react';
import Button from './Button';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  render() {
    const user = this.props.userData;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.location}</td>
        <td>{user.age}</td>
        <td>
          <Button
            label={'Edit'}
            size={'small'}
            type={'outline'}
            action={() => console.log('do action')}
            />
        </td>
      </tr>
    )
  }
}

export default UserRow;
