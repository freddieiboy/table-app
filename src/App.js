import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersDataTable from './UsersDataTable'

class App extends Component {
  render() {
    const styles = {
      App: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        height: '100vh'
      }
    }
    return (
      <div className="App" style={styles.App}>
        <UsersDataTable/>
      </div>
    );
  }
}

export default App;
