import React, { Component } from 'react';
import UserRow from './UserRow';

class UsersDataTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      UsersDataTable: {
        flex: 'auto',
        padding: '1em 3em',
        backgroundColor: 'white',
        boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.1)',
        maxWidth: '900px',
        width: '100%',
        minHeight: '320px',
        maxHeight: '320px'
      }
    }

    const setupTableRows = () => {
      let userDataList = this.props.userDataList;
      return userDataList.map((user, key) => {
        return (
          <UserRow key={key} userData={user}/>
        )
      })
    }

    return (
      <div className="UsersDataTable" style={styles.UsersDataTable}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Age</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
          {this.props.userDataList.length < 1 ?
            <tr>
              <td>No Data</td>
            </tr>
          :
            setupTableRows()
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default UsersDataTable;
