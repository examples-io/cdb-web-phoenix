import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * @description Image component - renders an accessible image
 */
class Image extends Component {
    render() {
        return (
            <img className={this.props.className}
                 id={this.props.id}
                 src={this.props.src}
                 alt={this.props.alt} />
        );
    }
}

Image.propTypes = {
    /**
     * className - classes to be applied to the image element
     */
    className: PropTypes.string,
    /**
     * id - element id of the image
     */
    id: PropTypes.string,
    /**
     * src - location of the image
     */
    src: PropTypes.node,
    /**
     * alt - alternative text for the image (for accessibility purposes)
     */
    alt: PropTypes.string
};

export default Image;