import { useState, useEffect } from 'react';

const useToggle = () => {
    const [active, setActive] = useState("");
    let [elemData, setElemData] = useState("");

    const toggleClass = (event) => {
        event.persist();
        setElemData(event.target.getBoundingClientRect())

        let dropdown = event.target.dataset.dropdown

        if (active.includes(dropdown)) {
            setActive("")
        } else {
            setActive(dropdown)
        }
    };

    return {
        toggleClass,
        active,
        elemData
    };
}

export default useToggle;

