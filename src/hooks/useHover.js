import { useState } from 'react';

const useHover = () => {
    const [hovering, setHovering] = useState(false);

    const handleMouseOver = () => {
        setHovering(true);
    }

    const handleMouseOut = () => {
        setHovering(false);
    }

    const attributes = {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
    }

    return [hovering, attributes];
}

export default useHover;
