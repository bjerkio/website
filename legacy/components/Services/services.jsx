import React from 'react'
import PropTypes from 'prop-types'
import './services.css';
import IconArrowRight from '../../images/icon-arrow-right.svg';
import { Link } from 'gatsby';

const Services = ({ data }) => (
  <Link className="service" to={data.link.uid}>
    <div>{data.title1.text}</div>
    <img className="service__icon" src={IconArrowRight} alt="Arrow Right" />
  </Link>
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services
