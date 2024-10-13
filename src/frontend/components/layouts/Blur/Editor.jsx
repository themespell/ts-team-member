import editorStore from '../../../../editor/states/editorStore';

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
                // value: 'blueslider.default',
                value: editorStore().blueslider?.default || 5,
            },
        ]
    };
};

export { register_controls };