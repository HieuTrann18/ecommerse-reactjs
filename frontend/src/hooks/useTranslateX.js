import useScrollHandling from "./useScrollHandling"
import React, { useEffect, useState, useRef } from 'react';

const useTranslateX = () => {
    const {scrollPosition, scroll } = useScrollHandling()
    const [translateXPosition, setTranslateXPosition] = useState(80)



    const handleTranslateX = () => {
        if (scroll === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1)
        } else if (scroll === 'up') {
            setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1)
        }
    }

    useEffect(() => {
        handleTranslateX()
    }, [scrollPosition])

    return {
        translateXPosition,
        handleTranslateX,
        scrollPosition
    }
}

export default useTranslateX