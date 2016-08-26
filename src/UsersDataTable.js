import React, { Component } from 'react';
import UserRow from './UserRow';

/*
  UsersDataTable is the main table.

  <UsersDataTable
    userDataList={
      if_there_are_search_tags ?
      filtered_user_list :
      default_user_list
    }/>

  Table inherits userDataList from App.js. Rows are iterated from items in
  userDataList props with `<UserRow/>`.
*/

class UsersDataTable extends Component {
  constructor(props) {
    super(props);
  }

  setupTableRows = () => {
    let userDataList = this.props.userDataList;
    return userDataList.map((user, key) => {
      return (
        <UserRow key={key} userData={user}/>
      )
    })
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

    /*
      Render Table.

      Switch between table and empty state on the size of userDataList.
    */

    return (
      <div className="UsersDataTable" style={styles.UsersDataTable}>
      {this.props.userDataList.length > 0 ?
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
            {this.setupTableRows()}
          </tbody>
        </table>
        :
        <div className="emptyState">Empty</div>
      }
      </div>
    )
  }
}

export default UsersDataTable;
