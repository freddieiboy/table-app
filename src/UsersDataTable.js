import React, { Component } from 'react';
import Button from './Button';
import SearchBox from './SearchBox';

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
            <tr>
              <td>Tam</td>
              <td>Wyoming</td>
              <td>41</td>
              <td><Button
                label={'Edit'}
                size={'small'}
                type={'outline'}
                action={() => console.log('do action')}
                /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UsersDataTable;
