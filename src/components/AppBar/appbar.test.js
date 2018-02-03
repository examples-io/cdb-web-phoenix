import React from 'react';
import renderer from 'react-test-renderer';

import AppBar from './AppBar';

describe('AppBar tests', () => {
    it ('renders Header correctly', () => {
        const tree = renderer
            .create(<AppBar headerLeft="left logo here" headerRight="right logo here" > Test Header </AppBar>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
