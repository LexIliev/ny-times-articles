import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { create } from 'react-test-renderer';
import { ArticleDetails } from '../../components';

describe('ArticleDetails component', () => {
  const mockedMedia = [
    {
      'media-metadata': [
        {
          url: 'https://media.test.com/images/first-image.jpg',
        },
        {
          url: 'https://media.test.com/images/second-image.jpg',
        },
        {
          url: 'https://media.test.com/images/third-image.jpg',
        },
      ],
    },
  ];

  const mockedIcon = require('/assets/right-arrow.svg');
  let props = {};

  beforeEach(() => {
    props = {
      id: 0,
      title: '',
      abstract: '',
      byline: '',
      published_date: '',
      media: mockedMedia,
      icon: mockedIcon,
    };
  });

  test('should match snapshot and render correctly', () => {
    props = {
      ...props,
      title: 'Article title',
      byline: 'By Author',
      abstract: 'Article abstract',
      published_date: '2019-05-17',
    };

    const component = create(<ArticleDetails {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render correctly with empty string values', () => {
    const component = mount(<ArticleDetails {...props} />);

    expect(component.prop('title')).toEqual('');
    expect(component.prop('abstract')).toMatch('');
    expect(component.prop('byline')).toEqual('');
    expect(component.prop('published_date')).toEqual('');
  });

  test('check the type of values', () => {
    props = {
      ...props,
      title: 'Article title',
      abstract: 'Article abstract',
      byline: 'By Author',
      published_date: '2019-05-17',
    };

    const component = mount(<ArticleDetails {...props} />);

    expect(component.prop('id')).toEqual(0);
    expect(component.prop('title')).toMatch('Article title');
    expect(component.prop('abstract')).toMatch('Article abstract');
    expect(component.prop('byline')).toMatch('By Author');
    expect(component.prop('published_date')).toMatch('2019-05-17');
    expect(component.prop('media')).toEqual(
      expect.arrayContaining(mockedMedia),
    );
    expect(component.prop('icon')).toEqual({});
  });
});
