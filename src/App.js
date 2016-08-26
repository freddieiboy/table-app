import React, { Component } from 'react';
import UsersDataTable from './UsersDataTable';
import SearchBox from './SearchBox';
import { Logo } from './logo';
import { FirebaseDb } from './modules/firebase';
let ref = FirebaseDb.ref();

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
    // this.initUserDatabase();
    this.setupListenToUserDatabase();
  }

  addSearchTags = (tags) => {
    this.filteredUserDataList(tags);
    this.setState({searchTags: tags});
  }

  filteredUserDataList = (tags) => {
    let createNewList = [];

    this.state.userDataList.map(user => {
      tags.map(tag => {
        if (
          user.location.toLowerCase() === tag.toLowerCase() ||
          user.name.toLowerCase() === tag.toLowerCase() ||
          user.age.toString().toLowerCase() === tag.toLowerCase()
        ) {
          createNewList.push(user)
        }
      })
    })
    this.setState({filteredUserDataList: createNewList})
  }

  setupListenToUserDatabase = () => {
    let userDataList = [];
    ref.child('UserData').on('value', (user) => {
      const userData = user.val();
      this.setState({userDataList: userData})
    })
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
