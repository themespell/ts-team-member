const register_controls = () => {
    return {
        controls: [
            {
                type: 'divider',
                label: 'Spotlight Styles'
            },
            {
                type: 'color',
                label: 'Card Background',
                name: 'spotlight.color.background',
            },
            {
                type: 'color',
                label: 'Accent Color',
                name: 'spotlight.color.accent',
            },
            {
                type: 'color',
                label: 'Overlay Color',
                name: 'spotlight.color.overlay',
            },
            {
                type: 'color',
                label: 'Button Text Color',
                name: 'spotlight.color.buttonText',
            },
        ]
    };
};

export { register_controls };
