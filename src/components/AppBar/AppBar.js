import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './appbar.css'

/**
 * @description Header component - renders a header with optional left and right corner spaces for logos, etc.
 */
class AppBar extends Component {
    render() {
        return (
            <div className="app-bar">
                <div className="app-bar-left">
                    {this.props.headerLeft}
                </div>
                { this.props.children && <h1> {this.props.children} </h1> }
                <div className="app-bar-right">
                    {this.props.headerRight}
                </div>
            </div>
        );
    }
}

AppBar.propTypes = {
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

export default AppBar;
