const register_controls = () => {
    return {
        controls: [
            {
                type: 'divider',
                label: 'Tiles Styles'
            },
            {
                type: 'color',
                label: 'Hover Background Color',
                name: 'tiles.hover.color.background',
            },
            {
                type: 'color',
                label: 'Hover Member Name Color',
                name: 'tiles.hover.color.memberName',
            },
            {
                type: 'color',
                label: 'Hover Member Designation Color',
                name: 'tiles.hover.color.memberDesignation',
            },
  
        ]
    };
};

export { register_controls };