import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Header from './Header';

describe('Header tests', () => {
    it ('renders Header correctly', () => {
        const tree = renderer
            .create(<Header headerLeft="left logo here" headerRight="right logo here" > Test Header </Header>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('triggers the onChange event when language changed', () => {
        const changleLanguageSpy = jest.spyOn(Header.prototype, 'changeLanguage'),
            wrapper = mount(<Header />);

        wrapper.find('select').simulate('change');

        expect(changleLanguageSpy).toHaveBeenCalled();
    });
});
