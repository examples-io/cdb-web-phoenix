import React from 'react';
import renderer from 'react-test-renderer';

import Image from './Image';

describe('Image tests', () => {
    it ('renders Image correctly', () => {
        const tree = renderer
            .create(<Image id="scotiabankLogo" alt="Scotiabank logo" src="" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});