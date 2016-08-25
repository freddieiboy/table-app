import React, { Component } from 'react';
import Button from './Button';
import { FirebaseDb } from './modules/firebase';
let ref = FirebaseDb.ref();

class UsersDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    }
  }

  componentWillMount = () => {
    ref.child('UserData').transaction((data) => {
      if (data === null) {
        // INIT user table data if firebase is null
        return {
          Joe: {
            location: 'California',
            age: 23
          },
          Lana: {
            location: 'Texas',
            age: 64
          },
          Tam: {
            location: 'Wyoming',
            age: 41
          }
        }
      } else {
        console.log('UserData exists.')
      }
    }, (error) => {
      if (error) {
        console.log('Transaction failed abnormally!', error);
      }
    });
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
            <tr>
              <td>Joe</td>
              <td>California</td>
              <td>23</td>
              <td><Button
                label={'Edit'}
                size={'small'}
                type={'outline'}
                action={() => console.log('do action')}
                /></td>
            </tr>
            <tr>
              <td>Lana</td>
              <td>Texas</td>
              <td>65</td>
              <td><Button
                label={'Edit'}
                size={'small'}
                type={'outline'}
                action={() => console.log('do action')}
                /></td>
            </tr>
            {this.state.test ?
              <tr>
                <td><input className="table-input" type="text" defaultValue="Tam" onChange={(text) => console.log(text.nativeEvent.srcElement.value)}/></td>
                <td><input className="table-input" type="text" defaultValue="Wyoming"/></td>
                <td><input className="table-input" type="text" defaultValue="41"/></td>
                <td style={{position: 'relative'}}><Button
                  label={'Cancel'}
                  size={'small'}
                  type={'outline'}
                  action={() => this.setState({test: false})}
                  />
                  <div style={{position: 'absolute', top: 12, left: 100}}><Button
                    label={'Save'}
                    size={'small'}
                    action={() => this.setState({test: true})}
                    /></div></td>
              </tr>
              :
              <tr>
                <td>Tam</td>
                <td>Wyoming</td>
                <td>41</td>
                <td><Button
                  label={'Edit'}
                  size={'small'}
                  type={'outline'}
                  action={() => this.setState({test: true})}
                  /></td>
              </tr>}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UsersDataTable;
