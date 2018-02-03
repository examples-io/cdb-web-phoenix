import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('Card tests', () => {
    it ('renders Card without image correctly', () => {
        const tree = renderer
            .create(<Card id="testCard"> Test card </Card>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders Card with image correctly', () => {
        const tree = renderer
            .create(<Card id="testCardWithImage" image={{ alt: 'test card', src: '/test.png' }}> Test card with image </Card>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders Card with custom class correctly', () => {
        const tree = renderer
            .create(<Card id="testCardWithCustomClass" className="test-class"> Test card with image </Card>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});