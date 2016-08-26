import React from 'react';
import Button from '../src/Button';
import renderer from 'react-test-renderer';

describe('App container', () => {
  it('should exist', () => {
    const component = renderer.create(
      <Button />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
