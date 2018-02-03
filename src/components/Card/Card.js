import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import './card.css'

/**
 * @description Card component - renders a div with "card" styling with specified text and optional image
 */
class Card extends Component {
    render() {
        return (
            <div className={'card ' + (this.props.className ? this.props.className : '')} id={this.props.id}>
                {
                    this.props.image &&
                    <div className="card-left">
                        <Image alt={this.props.image.alt} src={this.props.image.src} />
                    </div>
                }
                <div className="card-right">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    /**
     * children - text / nodes to be displayed on the card
     */
    chidren: PropTypes.node,
    /**
     * image - object with information about the image to be displayed.
     * Structure:
     *  {
     *      alt : string,
     *      src: string
     *  }
     */
    image: PropTypes.object,
    /**
     * id - element id of the card
     */
    id: PropTypes.string,
    /**
     * className - classes to be applied to the Card element
     */
    className: PropTypes.string
};

export default Card;