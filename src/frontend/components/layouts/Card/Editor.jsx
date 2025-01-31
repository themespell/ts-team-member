const register_controls = () => {
    return {
        controls: [
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
                label: 'Image Border Color',
                name: 'tscard.imageBorderColor',
            },
            {
                type: 'divider',
            },
            {
                type: 'slider',
                label: 'Image Border Radius',
                name: 'tscard.imageBorderRadius',
                range: '100%',
                unit: 'px',
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