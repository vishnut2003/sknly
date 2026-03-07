import React, { HTMLAttributes, useRef } from 'react'

const SwipDiv = ({
    onSwipeLeft,
    onSwipeRight,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement> & {
    onSwipeLeft: () => void,
    onSwipeRight: () => void,
}) => {

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleSwipe = () => {
        const diff = touchStartX.current - touchEndX.current;

        if (diff > 50) {
            onSwipeLeft();
        }

        if (diff < -50) {
            onSwipeRight();
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    return (
        <div
            {...props}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >{children}</div>
    )
}

export default SwipDiv