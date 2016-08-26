import React from 'react';
import { shallow, mount, render } from 'enzyme';
jest.dontMock('../src/SearchBox');

import SearchBox from '../src/SearchBox';

describe('SearchBox', () => {
  it('should exist', () => {
    const mockFunction = () => console.log('mock function');
    const mockData = [];

    expect(shallow(
      <SearchBox
      addSearchTags={mockFunction}
      tags={mockData}/>
    ).is('.SearchBox')).toBe(true)
  });
});
