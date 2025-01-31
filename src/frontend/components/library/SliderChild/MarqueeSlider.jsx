import React, { useState, useEffect, useRef } from 'react';

const MarqueeSlider = ({
                           children,
                           speed = 5, // Reduced default speed
                           direction = 'left',
                           pauseOnHover = true,
                           gap = 0, // Set gap to 0 to avoid discontinuities
                           className = '',
                           containerClassName = '',
                           slideClassName = '',
                       }) => {
    const [isHovered, setIsHovered] = useState(false);
    const contentRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [duration, setDuration] = useState(0);
    const childrenArray = React.Children.toArray(children);

    // Duplicate content for smoother transition
    const items = [...childrenArray, ...childrenArray, ...childrenArray, ...childrenArray];

    useEffect(() => {
        const updateDimensions = () => {
            if (contentRef.current) {
                const { offsetWidth, offsetHeight } = contentRef.current;
                setDimensions({
                    width: offsetWidth / 4, // Divide by 4 because we have 4 copies
                    height: offsetHeight / 4,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Calculate duration based on content size and speed
        const isVertical = direction === 'up' || direction === 'down';
        const size = isVertical ? dimensions.height : dimensions.width;

        // Slower animation by multiplying by a larger factor
        const newDuration = size / speed * 100;
        setDuration(newDuration);

        return () => window.removeEventListener('resize', updateDimensions);
    }, [direction, speed, dimensions.width, dimensions.height, children]);

    const getAnimationStyle = () => {
        const isVertical = direction === 'up' || direction === 'down';
        const size = isVertical ? dimensions.height : dimensions.width;

        if (!size || size === 0) return {};

        return {
            animation: `marquee ${duration}ms linear infinite`,
            animationPlayState: isHovered && pauseOnHover ? 'paused' : 'running',
            willChange: 'transform', // Optimize rendering performance
            backfaceVisibility: 'hidden', // Prevent rendering artifacts
        };
    };

    const containerStyles = {
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
    };

    const contentStyles = {
        display: 'flex',
        flexDirection: direction === 'up' || direction === 'down' ? 'column' : 'row',
        gap: `${gap}px`, // Ensure gap is minimal or zero
        width: direction === 'up' || direction === 'down' ? '100%' : 'fit-content',
        height: direction === 'up' || direction === 'down' ? 'fit-content' : '100%',
        ...getAnimationStyle(),
    };

    const slideStyles = {
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <>
            <style>
                {`
                @keyframes marquee {
                    0% {
                        transform: ${direction === 'up' || direction === 'down' ? 'translateY(0)' : 'translateX(0)'};
                    }
                    100% {
                        transform: ${
                    direction === 'up' ? 'translateY(-100%)' :
                        direction === 'down' ? 'translateY(100%)' :
                            direction === 'right' ? 'translateX(100%)' :
                                'translateX(-100%)'
                };
                    }
                }
                `}
            </style>
            <div
                className={`marquee-container ${containerClassName}`}
                style={containerStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    ref={contentRef}
                    className={`marquee-content ${className}`}
                    style={contentStyles}
                >
                    {items.map((child, index) => (
                        <div
                            key={index}
                            className={`marquee-item ${slideClassName}`}
                            style={slideStyles}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MarqueeSlider;