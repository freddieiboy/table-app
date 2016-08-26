import React from 'react';
import { shallow, mount, render } from 'enzyme';
jest.dontMock('../src/UsersDataTable.js');

import UsersDataTable from '../src/UsersDataTable';

describe('UsersDataTable', () => {
  it('should exist', () => {
    const mockData = [{
      name: 'Mr. Test',
      location: 'Mars',
      age: '99'
    }];

    expect(shallow(<UsersDataTable userDataList={mockData}/>).is('.UsersDataTable')).toBe(true)
  });
});
