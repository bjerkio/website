import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import './button.css';

const Button = ({
    link,
    title
}) => (
    <Link className="button" to={link}>
        {title}
    </Link>
)

Button.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Button