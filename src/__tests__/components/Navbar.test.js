import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { create } from 'react-test-renderer';
import { Navbar } from '../../components';

describe('Navbar component', () => {
  jest.mock('./styles.scss', () => ({}));
  const mockedMenuIcon = '/assets/three-horizontal-lines.svg';
  const mockedSearchIcon = '/assets/search.svg';
  const mockedDotsIcon = '/assets/dots.svg';

  let props = {};

  beforeEach(() => {
    jest.mock('./styles.scss', () => ({}));
    props = {
      navigationTitle: '',
      menuIcon: mockedMenuIcon,
      searchIcon: mockedSearchIcon,
      dotsIcon: mockedDotsIcon,
    };
  });

  test('should match snapshot and render correctly', () => {
    props = {
      ...props,
      navigationTitle: 'Navigation title',
    };

    const component = create(<Navbar {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should have default props', () => {
    expect(Navbar.defaultProps.menuIcon).toBeDefined();
    expect(Navbar.defaultProps.searchIcon).toBeDefined();
    expect(Navbar.defaultProps.dotsIcon).toBeDefined();
  });

  test('should render with navigationTitle', () => {
    const props = {
      ...props,
      navigationTitle: 'Custom Navigation Title',
    };

    const wrapper = shallow(<Navbar {...props} />);
    expect(wrapper.text()).toEqual('Custom Navigation Title');
  });
});
