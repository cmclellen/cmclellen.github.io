import React from 'react';
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import Header from './Header';

describe('<Header />', () => {
  it('it should mount', () => {
    const component = renderer.create(<Header />);

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  });
});