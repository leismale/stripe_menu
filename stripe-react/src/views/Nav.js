import React, { Fragment, useEffect } from 'react';

import NavItem from '../components/NavItem'
import NavMenu from '../components/NavMenu'

import { navItems, navMenus } from '../navData';
import useToggle from "../hooks/useToggle";
import useResize from "../hooks/useResize";

const Nav = (props) => {
    const { active, elemData, toggleClass } = useToggle();
    const { style, resize } = useResize();

    let position = Math.round(Math.max(elemData.left + elemData.width / 2, 10));

    let dropdownStyles = {
        transform: `translateX(${position}px)`
    };

    return (
        <Fragment>
            <nav>
                <ul className="nav__items">
                    {Object.values(navItems).map(item => <NavItem isActive={active} toggleClass={toggleClass} title={item.title} data={(item.title.toLowerCase())} key={item.title} />)}
                </ul>
            </nav>

            <div className="dropdown" style={dropdownStyles} data-active={active !== "" ? "true" : "false"}>
                <div className="dropdown__background" style={style}></div>
                <div className="dropdown__container">
                    {Object.entries(navMenus).map(menu => <NavMenu resize={resize} isActive={active} content={menu[1]} data={(menu[0].toLowerCase())} key={menu[0].toLowerCase()} />)}
                </div>
            </div>
        </Fragment >
    );
}

export default Nav;
