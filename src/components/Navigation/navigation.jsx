import React from 'react'
import hamburger from './hamburger.svg'
import { Link } from 'gatsby'
import './navigation.css'


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
  <nav class="navigation">
    <div class="navigation__container">
        <div class="close-button"></div>
        <ul>
            {links.map((link) => {
                return (
                    <li>
                        <Link
                        to={link.link}>
                            {link.title}
                        </Link>
                    </li>
                ) 
            })}
        </ul>
    </div>
    <img class="hamburger-icon" src={hamburger} />
  </nav>
)

export default Navigation
