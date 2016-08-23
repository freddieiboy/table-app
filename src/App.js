import React, { Component } from 'react';
import './App.css';
import UsersDataTable from './UsersDataTable';
import SearchBox from './SearchBox';
import { Logo } from './logo';

class App extends Component {
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
        // flex: 0,
        padding: '4em',
        marginBottom: '5em'
      },
      logo: {
        // transform: 'scale(1)',
      }
    }
    return (
      <div className="App" style={styles.App}>
        <div className="logoContainer" style={styles.logoContainer}>
          {/* <div className="logo" style={styles.logo}> */}
            <Logo/>
          {/* </div> */}
        </div>
        <SearchBox/>
        <UsersDataTable/>
      </div>
    );
  }
}

export default App;
