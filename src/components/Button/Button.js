import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * @description Button component - renders different types of buttons based on type specified via props
 */
class Button extends Component {
    render() {
        return this.renderButton();
    }

    /**
     * @description Renders the correct HTML based on the button type prop passed in.
     *              Currently supports button types: continue and primary
     *              If no button type is passed in, renders primary button
     */
    renderButton() {
        const customClasses = this.props.className ? this.props.className : '';

        if (this.props.continue) {
            return (
                <button
                    className={'button button--continue block block--centered ' + customClasses}
                    id={this.props.id}
                    onClick={this.props.onClick} >
                    <span className="button__text"> {this.props.children} </span>
                    <span className="button__icon icon icon--continue"></span>
                </button>
            );
        } else {
            // default / primary type
            return (
                <button
                    className={'button button--primary ' + customClasses}
                    id={this.props.id}
                    onClick={this.props.onClick} >
                    {this.props.children}
                </button>
            );
        }
    }
}

Button.propTypes = {
    /**
     * continue - button type
     */
    continue: PropTypes.bool,
    /**
     * primary - button type
     */
    primary : PropTypes.bool,
    /**
     * children - content to be displayed on the button, typically a string
     */
    children: PropTypes.node,
    /**
     * id - element id of the button
     */
    id: PropTypes.string,
    /**
     * onClick - function to be attached to the button's onClick event
     */
    onClick: PropTypes.func,
    /**
     * className - classes to be applied to the button element
     */
    className: PropTypes.string,
};

export default Button;