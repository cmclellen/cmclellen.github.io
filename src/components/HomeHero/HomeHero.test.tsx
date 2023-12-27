import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import HomeHero from './HomeHero';

describe('<HomeHero />', () => {
  it('it should mount', () => {
    var component = renderer.create(<HomeHero />);
    
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});