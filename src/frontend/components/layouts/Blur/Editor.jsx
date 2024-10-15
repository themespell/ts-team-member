const register_controls = () => {
    const range = {
        min: 0,
        max: 100
    };

    
    return {
        controls: [
            {
                type: 'divider',
            },
            {
                type: 'slider',
                label: 'Slider',
                range: range,
                name: 'blueslider.default',
            },
        ]
    };
};

export { register_controls };