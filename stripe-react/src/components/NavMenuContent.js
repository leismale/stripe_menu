import React from 'react';

import { NavLink } from 'react-router-dom';

const NavMenuContent = props => {
    return (
        <NavLink to={props.content.url}>
            <h3>{props.content.heading}</h3>
            <p>{props.content.text}</p>
        </NavLink>
    );
}

export default NavMenuContent;


