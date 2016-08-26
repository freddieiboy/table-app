import React, { Component } from 'react';
import './App.css';
import UsersDataTable from './UsersDataTable';
import SearchBox from './SearchBox';
import { Logo } from './logo';
import { FirebaseDb } from './modules/firebase';
let ref = FirebaseDb.ref();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataList: []
    }
  }

  componentWillMount = () => {
    this.initUserDatabase();
    this.setupListenToUserDatabase();
  }

  initUserDatabase = () => {
    ref.child('UserDataID').transaction((data) => {
      if (data === null) {
        // INIT user table data if firebase is null
        return {
          1: {
            name: 'Joe',
            location: 'California',
            age: 23
          },
          2: {
            name: 'Lana',
            location: 'Texas',
            age: 64
          },
          3: {
            name: 'Tam',
            location: 'Wyoming',
            age: 41
          }
        }
      } else {
        // Push firebase data to local state
        console.log('UserData exists.')
      }
    }, (error) => {
      if (error) {
        console.log('Transaction failed abnormally!', error);
      }
    });
  }

  setupListenToUserDatabase = () => {
    let userDataList = [];
    ref.child('UserData').on('child_added', (user) => {
      const userData = user.val();
      userDataList.push(userData);
      this.setState({userDataList})
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
        <SearchBox/>
        <UsersDataTable userDataList={this.state.userDataList}/>
      </div>
    );
  }
}

export default App;
