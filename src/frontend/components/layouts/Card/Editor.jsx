const register_controls = () => {
    return {
        controls: [
            {
                type: 'divider',
                label: 'Card Styles'
            },
            {
                type: 'color',
                label: 'Background Color',
                name: 'tscard.backgroundColor',
            },
            {
                type: 'color',
                label: 'Text Color',
                name: 'tscard.textColor',
            },
            {
                type: 'color',
                label: 'Border Color',
                name: 'tscard.borderColor',
            },
            {
                type: 'color',
                label: 'Hover Background Color',
                name: 'tscard.hoverColor',
            },
            {
                type: 'color',
                label: 'Hover Text Color',
                name: 'tscard.hoverTextColor',
            },
            {
                type: 'color',
                label: 'Hover Border Color',
                name: 'tscard.hoverBorderColor',
            },
        ]
    };
};

export { register_controls };