import { mount } from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';
import { Article } from '../../components';

describe('Article component', () => {
  jest.mock('./styles.scss', () => ({}));
  const mockedMedia = [
    {
      'media-metadata': [
        {
          url: 'https://media.test.com/images/image.jpg',
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
      published_date: '2019-05-17',
    };

    const component = create(<Article {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render correctly with empty string prop values', () => {
    const component = mount(<Article {...props} />);

    expect(component.prop('title')).toEqual('');
    expect(component.prop('byline')).toEqual('');
    expect(component.prop('published_date')).toEqual('');
  });

  test('check the type of values', () => {
    props = {
      ...props,
      title: 'Article title',
      byline: 'By Author',
      published_date: '2019-05-17',
    };

    const component = mount(<Article {...props} />);

    expect(component.prop('id')).toEqual(0);
    expect(component.prop('title')).toMatch('Article title');
    expect(component.prop('byline')).toMatch('By Author');
    expect(component.prop('published_date')).toMatch('2019-05-17');
    expect(component.prop('media')).toEqual(
      expect.arrayContaining(mockedMedia)
    );
    expect(component.prop('icon')).toEqual({});
  });

  test('check for fallback if there is no media', () => {
    props = {
      ...props,
      title: 'Article title',
      byline: 'By Author',
      published_date: '2019-05-17',
      media: [],
    };

    const component = mount(<Article {...props} />);

    expect(component.prop('media')).toEqual([]);
  });
});
