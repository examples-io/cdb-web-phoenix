import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from './Checkbox';

describe('Checkbox tests', () => {
    it ('renders Checkbox correctly', () => {
        const tree = renderer
            .create(<Checkbox id="testCheckbox" label="Test Checkbox" value="" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders Checkbox error correctly', () => {
        const tree = renderer
            .create(<Checkbox id="errorCheckbox" label="Error Checkbox" value="" error />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders disabled Checkbox correctly', () => {
        const tree = renderer
            .create(<Checkbox id="disabledCheckbox" label="Disabled Checkbox" value="" disabled />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders Checkbox with custom class correctly', () => {
        const tree = renderer
            .create(<Checkbox id="customClassCheckbox" label="Custom Class Checkbox" value="" className="test-class" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders a pre-selected Checkbox correctly', () => {
        const tree = renderer
            .create(<Checkbox id="customClassCheckbox" label="Custom Class Checkbox" value={true} className="test-class" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});