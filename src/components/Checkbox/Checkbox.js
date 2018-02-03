import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getClassNames } from '../../utlities/getClassNames'

/**
 * @description Checkbox components - renders a checkbox with a label.
 *              Optional error and disabled styling applied as specified by the props.
 */
class Checkbox extends Component {
    render() {
        return (
            <label
                className={'form__input form__input--inline form__input--checkbox ' + (this.props.className ? this.props.className : '')}
                htmlFor={this.props.id}>
                <input
                    type="checkbox"
                    className={getClassNames('input input--checkbox', 'input--error', this.props.error)}
                    id={this.props.id}
                    value={this.props.value}
                    checked={this.props.value ? 'checked' : false}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled} />
                <span className="checkbox"></span>
                <div className={getClassNames('label label--inline label--checkbox', 'label--error', this.props.error)}>
                    {this.props.label}
                </div>
            </label>
        );
    }
}

Checkbox.propTypes = {
    /**
     * id - element id of the checkbox
     */
    id: PropTypes.string,
    /**
     * label - text to be displayed as the label
     */
    label: PropTypes.string,
    /**
     * value - internal value property of the checkbox
     */
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool, PropTypes.number ]),
    /**
     * onChange - function to be attached to the checkbox's onChange event
     */
    onChange: PropTypes.func,
    /**
     * error - boolean to indicate whether error styling should be applied or not
     */
    error: PropTypes.bool,
    /**
     * disabled - boolean to indicate whether checkbox should be disabled and styling applied or not
     */
    disabled: PropTypes.bool,
    /**
     * className - classes to be applied to the checkbox element
     */
    className: PropTypes.string,
};

/**
 * @description default values for disabled and error prop types
 */
Checkbox.defaultProps = {
    disabled: false,
    error: false
};

export default Checkbox;

