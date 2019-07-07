import { useState } from 'react';

const useResize = () => {
    const [style, setStyle] = useState({});
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const resize = (element, size, active) => {
        if (active === element && width !== size.width) {
            setWidth(size.width)
            setHeight(size.height)
            setStyle({
                width: `${size.width}px`,
                height: `${size.height}px`
            })
        }
    };

    return {
        resize,
        style
    };
}

export default useResize;

