import React from 'react'
import PropTypes from 'prop-types'
import './services.css';
import { Link } from 'gatsby';

const Services = ({ data }) => (
  <Link className="service" to={data.link.uid}>
    <div>{data.title1.text}</div>
    ➞
  </Link>
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services
