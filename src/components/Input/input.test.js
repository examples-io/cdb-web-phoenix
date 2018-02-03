import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

describe('Input tests', () => {
    it ('renders default Input correctly', () => {
        const tree = renderer
            .create(<Input id="textInput" label="Text label" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders default Input error correctly', () => {
        const tree = renderer
            .create(
                <Input
                    id="defaultError"
                    label="Default error"
                    value=""
                    onChange={event => event.target.value}
                    touched
                    error="Default error message" />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders user Input correctly', () => {
        const tree = renderer
            .create(
                <Input user
                       id="username"
                       label="Username or card number"
                       value=""
                       onChange={event => event.target.value} />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders password Input correctly', () => {
        const tree = renderer
            .create(
                <Input password
                       id="loginPassword"
                       label="Password"
                       value=""
                       onChange={ event => event.target.value } />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it ('renders default Input with custom class correctly', () => {
        const tree = renderer
            .create(
                <Input id="customClass"
                       label="Custom Class"
                       className="test-class"
                       value=""
                       onChange={ event => event.target.value } />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});