import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button tests', () => {
    it ('renders default button correctly', () => {
        const tree = renderer
            .create(<Button> Default </Button>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders continue button correctly', () => {
        const tree = renderer
            .create(<Button continue> Continue </Button>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders default button with custom class', () => {
        const tree = renderer
            .create(<Button className="test-class"> Continue </Button>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});