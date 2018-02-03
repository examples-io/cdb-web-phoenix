import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from "../../utlities/getClassNames"

/**
 * @description Input component - renders different input components based on type specified via props with a label.
 *              Error and placeholder text options available for the default input text box.
 */
class Input extends Component {

    render() {
        return this.renderInput();
    }

    /**
     * @description renders different input based on type passed in via props
     *              Current types supported: user, password, default ("normal") textbox
     *              If no type is passed in, renders the deafault input box
     */
    renderInput() {
        const customClasses = this.props.className ? this.props.className : '';

        if (this.props.user || this.props.password) {
            const customProps = {
                type: this.props.user ? 'text' : 'password' ,
                icon: this.props.user ? 'icon--user input-w-aux__icon' : 'input-w-aux__icon icon--privacy'
            };

            return (
                <div className={'input-w-aux ' + customClasses}>
                    <span className={customProps.icon}></span>
                    <input className="input-w-aux__input input input--text"
                           type={customProps.type}
                           id={this.props.id}
                           value={this.props.value}
                           onChange={this.props.onChange} />
                    {!this.props.value && <label className="input-w-aux__label" htmlFor={this.props.id}> {this.props.label} </label>}
                </div>
            );

        } else {
            const error = (this.props.error && this.props.touched);

            return (
                <div className={getClassNames('form__input ' + customClasses, 'form__input--error', error)}>
                    <label
                        className={getClassNames('label', 'label--error', error)}
                        htmlFor={this.props.id}>
                        {this.props.label}
                    </label>
                    <input
                        className={getClassNames('input input--text', 'input--error', error)}
                        type="text"
                        id={this.props.id}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder} />
                    {this.renderError()}
                </div>
            );
        }
    }

    /**
     * @description if the touched property is true and an error is passed in, renders the error message
     *              with appropriate styling
     */
    renderError() {
        if (this.props.error && this.props.touched) {
            return <div className="error"> {this.props.error} </div>
        } else {
            return null;
        }
    }
}

Input.propTypes = {
    /**
     * user - type of input, used for login usernames/card numbers
     */
    user: PropTypes.bool,
    /**
     * password - type of input
     */
    password: PropTypes.bool,
    /**
     * id - element id of the input
     */
    id: PropTypes.string,
    /**
     * label - label to be displayed with the input
     */
    label: PropTypes.string,
    /**
     * value - internal value property of the input element
     */
    value: PropTypes.string,
    /**
     * onChange - function to be attached to the onChange event of the input element
     */
    onChange: PropTypes.func,
    /**
     * touched - boolean to indicate whether the user has interacted with the input
     */
    touched: PropTypes.bool,
    /**
     * error - error message to be displayed (only in default input type)
     */
    error: PropTypes.string,
    /**
     * placeholder - placeholder text to be displayed (only in default input type)
     */
    placeholder: PropTypes.bool,
    /**
     * className - classes to be applied to the outer div of the input
     */
    className: PropTypes.string
};

export default Input;
