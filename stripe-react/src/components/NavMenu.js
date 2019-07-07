import React from 'react';

import NavMenuContent from './NavMenuContent';

const NavMenu = props => {
    let refCallback = element => {
        if (element) {
            props.resize(props.data, element.getBoundingClientRect(), props.isActive)
        }
    };

    return (
        <div ref={refCallback} className="dropdown__container__group" data-active={props.isActive == props.data ? "true" : "false"} data-dropdown={props.data}>
            {Object.values(props.content).map((content, i) => <NavMenuContent content={content} key={`${props.data}-${i}`} />)}
        </div>
    );
}

export default NavMenu;