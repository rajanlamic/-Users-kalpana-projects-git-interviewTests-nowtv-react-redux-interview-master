import React from 'react';
import { shallow } from 'enzyme';
import Message from '.';

describe('message', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      message: 'test message',
      avatar: 'http://dummyimage.com/100x100.png/5fa2dd/fffff',
      timestamp: '2016-02-24T00:01:28Z',
      email: 'test@email.com',
    };
    wrapper = shallow(<Message {...props} />);
  });

  afterEach(() => {
    props = null;
    wrapper = null;
  });

  it('should render Message property', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
