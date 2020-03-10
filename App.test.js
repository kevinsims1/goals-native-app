import React from 'react';
import renderer from 'react-test-renderer';

import {componentDidMount} from './App';

test('<App />, component did mount', async() => {
    const data = await componentDidMount()
  expect(data).toBe(true);
});
