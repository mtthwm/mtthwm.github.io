import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    const tabs = [
        {
            link: "/",
            name: "About",
        },
        {
            link: "/skills",
            name: "Skills",
        },
        {
            link: "/education",
            name: "Education",
        },
        {
            link: "/experience",
            name: "Experience",
        },
        {
            link: "/projects",
            name: "Projects",
        },
    ]

    return (
        <div className={`navbar-container ${props.className}`}>
            {tabs.map((element) => {
                return (
                    <Link to={element.link} className='navbar-link'>
                        {element.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default Navbar;