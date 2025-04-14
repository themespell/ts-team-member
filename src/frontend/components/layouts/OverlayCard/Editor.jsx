const register_controls = () => {
    return {
        controls: [
            {
                type: 'divider',
                label: 'Overlay Styles'
            },
            {
                type: 'color',
                label: 'Overlay Color',
                name: 'tsoverlay.color.overlay',
            },
            {
                type: 'slider',
                label: 'Image Size',
                name: 'tsoverlay.size.image',
                range: {
                    min:0,
                    max:450
                },
                unit: 'px'
            },
            {
                type: 'slider',
                label: 'Overlay Opacity',
                name: 'tsoverlay.opacity',
                range: '10',
            },
            {
                type: 'slider',
                label: 'Overlay Border Width',
                name: 'tsoverlay.borderWidth',
                range: '100',
                unit: 'px',
            },
            {
                type: 'slider',
                label: 'Overlay Radius',
                name: 'tsoverlay.borderRadius',
                range: '100',
                unit: 'px',
            },
            {
                type: 'color',
                label: 'Overlay Border Color',
                name: 'tsoverlay.borderColor',
            },
        ]
    };
};

export { register_controls };