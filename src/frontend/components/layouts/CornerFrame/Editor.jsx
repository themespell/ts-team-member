const register_controls = () => {
    return {
        controls: [
            {
                type: 'divider',
                label: 'CornerFrame Styles'
            },
            {
                type: 'color',
                label: 'Accent Color',
                name: 'tscornerframe.color.accent',
            },
            {
                type: 'color',
                label: 'Overlay Color',
                name: 'tscornerframe.color.overlay',
            },
        ]
    };
};

export { register_controls };
