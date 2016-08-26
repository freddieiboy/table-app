import React from 'react';
import { shallow, mount, render } from 'enzyme';
jest.dontMock('../src/Button');

import Button from '../src/Button';

describe('Button', () => {
  it('should exist', () => {

    expect(shallow(<Button/>).is('.button')).toBe(true)
  });
});
