import React, { Component } from 'react';
import UsersDataTable from './UsersDataTable';
import SearchBox from './SearchBox';
import { Logo } from './logo';
import { FirebaseDb } from './modules/firebase';
let ref = FirebaseDb.ref();

/*
  The main app container. Holds Logo, SearchBox, Table.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataList: [],
      filteredUserDataList: [],
      searchTags: []
    }
  }

  componentWillMount = () => {
    /*
      IMPORTANT: Initial firebase listen.

      This sets up the initial listener from firebase on WillMount
      for userdata that is pushed down to the rest of the components.
      Local state will be updated when new data is changed on firebase database.
    */
    this.setupListenToUserDatabase();
  }

  setupListenToUserDatabase = () => {
    let userDataList = [];
    ref.child('UserData').on('value', (user) => {
      const userData = user.val();
      /*
        Push firebase data to local state.
      */
      this.setState({userDataList: userData});
    })
  }

  addSearchTags = (tags) => {
    /*
      Action to add search tags to local state from <SearchBox/>.

      Allows data to be filtered from the top level for easier
      data management. Later todo: add state container library like
      Redux for further decoupling of local state from App.js.
    */
    this.filteredUserDataList(tags);
    this.setState({searchTags: tags});
  }

  filteredUserDataList = (tags) => {
    let createNewList = [];
    /*
      Add filtered items to a new list: filteredUserDataList.
      Keep the Firebase data separate in it's own list: userDataList.
    */
    this.state.userDataList.map(user => {
      tags.map(tag => {
        if (
          user.location.toLowerCase() === tag.toLowerCase() ||
          user.name.toLowerCase() === tag.toLowerCase() ||
          user.age.toString().toLowerCase() === tag.toLowerCase()
        ) {
          createNewList.push(user);
        }
      });
    });
    this.setState({filteredUserDataList: createNewList});
  }

  render() {
    const styles = {
      App: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        height: '100vh'
      },
      logoContainer: {
        flex: '0',
        minHeight: '10em',
        marginBottom: '3em'
      },
      logo: {
        transform: 'translate(0, 7em) scale(6)'
      }
    }

    /*
      Render Logo, SearchBox, Table.

      The two lists, userDataList and filteredUserDataList are
      switched and passed down to the table based on if there
      are any searchTags in local state.
    */

    return (
      <div className="App" style={styles.App}>
        <div className="logoContainer" style={styles.logoContainer}>
          <div className="logo" style={styles.logo}>
            <Logo/>
          </div>
        </div>
        <SearchBox
          addSearchTags={this.addSearchTags}
          tags={this.state.searchTags}/>
        <UsersDataTable
          userDataList={
            this.state.searchTags.length > 0 ?
            this.state.filteredUserDataList :
            this.state.userDataList
          }/>
      </div>
    );
  }
}

export default App;
