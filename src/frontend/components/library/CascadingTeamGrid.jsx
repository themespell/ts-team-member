import React, { useState, useEffect, useRef } from 'react';

const CascadingTeamGrid = ({
                               children,
                               columns = 3, // Number of columns in the grid
                               gap = '20px', // Gap between items
                               speed = 5, // Controls the stagger delay (lower = faster)
                           }) => {
    const [isLoaded, setIsLoaded] = useState(false); // Track if the grid is loaded
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true); // Mark as loaded when the grid enters the viewport
                        const items = entry.target.querySelectorAll('.team-member');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * (100 / speed)); // Stagger delay based on speed
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the grid is visible
            }
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => {
            if (gridRef.current) {
                observer.unobserve(gridRef.current);
            }
        };
    }, [speed]);

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        opacity: isLoaded ? 1 : 0, // Fade in the entire grid when loaded
        transition: 'opacity 0.5s ease-in-out',
    };

    const itemStyles = {
        opacity: 0, // Initially hidden
        transform: 'translateY(20px)', // Start slightly below
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
    };

    const visibleItemStyles = {
        opacity: 1,
        transform: 'translateY(0)', // Move to final position
    };

    // Debugging: Log children to ensure they are passed correctly
    console.log('Children in CascadingTeamGrid:', children);

    return (
        <>
            <style>
                {`
                .team-member.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                `}
            </style>
            <div ref={gridRef} style={gridStyles}>
                {React.Children.count(children) > 0 ? (
                    React.Children.map(children, (child, index) => (
                        <div
                            key={index}
                            className={`team-member`}
                            style={{
                                ...itemStyles,
                            }}
                        >
                            {child}
                        </div>
                    ))
                ) : (
                    <p>No team members found.</p> // Fallback message
                )}
            </div>
        </>
    );
};

export default CascadingTeamGrid;