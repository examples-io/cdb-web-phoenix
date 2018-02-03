import React from 'react';
import renderer from 'react-test-renderer';

import Dropdown from './Dropdown';

describe('Dropdown tests', () => {
    it ('renders Dropdown correctly', () => {
        const options = [
            { id: 'opt1', text: 'option 1' },
            { id: 'opt2', text: 'option 2' },
            { id: 'opt3', text: 'option 3' }
        ];
        const tree = renderer
            .create(<Dropdown id="testDropdown" name="test" label="Test Dropdown:" options={options} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});