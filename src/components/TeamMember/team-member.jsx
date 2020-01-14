import React from 'react'
import PropTypes from 'prop-types'
import './team-member.css';

const TeamMember = ({ data }) => (
  <div className="team-member">
      <img className="team-member__portrait" src={data.portrait.url} alt="bilde av ansatt" />
      <h2 className="team-member__name">{data.first_and_lastname.text}</h2>
      <div className="team-member__position">{data.position.text}</div>
  </div>
)

TeamMember.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamMember
