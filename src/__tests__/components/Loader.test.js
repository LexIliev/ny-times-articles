import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { create } from 'react-test-renderer';
import { Loader } from '../../components';

describe('Loader component', () => {
  test('should match snapshot and render correctly', () => {
    const component = create(<Loader />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have default loaderText', () => {
    expect(Loader.defaultProps.loaderText).toBeDefined();
  });

  test('should render with default loaderText prop', () => {
    const result = Loader.defaultProps.loaderText;
    expect(result).toBe('Loading...');
  });

  test('should render with loaderText prop', () => {
    const props = {
      loaderText: 'Page is loading...',
    };

    const component = mount(<Loader {...props} />);

    expect(component.prop('loaderText')).toMatch('Page is loading...');
  });
});
