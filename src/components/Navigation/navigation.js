import React from 'react'

const links = [{
        title: 'Vår historie',
        link: '#'
    },
    {
        title: 'Tjenester',
        link: '#'
    },
    {
        title: 'Ansikter',
        link: '#'
    },
    {
        title: 'Kontakt oss',
        link: '#'
    }
];

const Navigation = () => (
  <div class="home-banner">
    <img class="home-banner--image" src={HomeBannerSVG} />
  </div>
)

export default Navigation
