const register_controls = () => {
    return {
        controls: [
            {
                type: 'divider',
                label: 'Horizontal Card Styles'
            },
            {
                type: 'color',
                label: 'Hover Border Color',
                name: 'tshorizontal.borderColor.hover',
            },
        ]
    };
};

export { register_controls };