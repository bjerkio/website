import React from 'react'
import HomeBannerSVG from './home-banner.svg';
import './home-banner.css';

const HomeBanner = () => (
  <div className="home-banner">
    <img className="home-banner--image" alt="Digitalization" src={HomeBannerSVG} />
  </div>
)

export default HomeBanner
