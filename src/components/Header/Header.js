import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from '../../utlities/language/i18nextConfig';


import './header.css';
import { AppBar, Dropdown, Image } from '../';
import scotiaLogo from '../assets/images/scotiabankLogo.svg';

/**
 * @description Header component - renders a header with optional left and right corner spaces for logos, etc.
 */
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en',
            languageOptions: [
                { id: 'en', text: 'EN' },
                { id: 'fr', text: 'FR' }
            ]
        }
    }

    changeLanguage(event) {
        i18n.changeLanguage(event.target.value);
    }

    render() {
        const headerLeft = (<Image alt="Scotiabank" id="scotiabankLogo" src={scotiaLogo}/>);
        const headerRight = (<Dropdown id="languagePicker" name="language" onChange={this.changeLanguage} options={this.state.languageOptions} value={this.state.language}/>);

        return (
            <AppBar
                headerLeft={headerLeft}
                headerRight={headerRight}
            />
        );
    }
}

Header.propTypes = {
    /**
     * headerLeft - optional content to be displayed in the left corner of the header
     */
    headerLeft: PropTypes.node,
    /**
     * headerRight - optional content to be displayed in the right corner of the header
     */
    headerRight: PropTypes.node,
    /**
     * children - optional content to be displayed in the center of the header
     */
    children: PropTypes.node
};

export default Header;
