import React from 'react';

const NavItem = props => {
    return (
        <li onClick={e => props.toggleClass(e)} className="nav__item" data-active={props.isActive == props.data ? "true" : "false"} data-dropdown={props.data}>
            {props.title}
        </li>
    );
}

export default NavItem;