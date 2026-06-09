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
                label: 'Card Background',
                name: 'tscornerframe.color.cardBg',
            },
            {
                type: 'color',
                label: 'Text Color',
                name: 'tscornerframe.color.text',
            },
        ]
    };
};

export { register_controls };
